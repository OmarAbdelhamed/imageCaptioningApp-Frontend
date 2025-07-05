import { useState } from 'react';
import Nav from '../components/nav';

function Comparison() {
  const [file, setFile] = useState(null);
  const [generalResult, setGeneralResult] = useState(null);
  const [vitResult, setVitResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleCompare = async () => {
    if (!file) {
      alert('Please select an image first.');
      return;
    }

    setIsLoading(true);
    setGeneralResult(null);
    setVitResult(null);

    try {
      // Prepare form data for both requests
      const formData1 = new FormData();
      formData1.append('image', file);
      formData1.append('model', 'general');

      const formData2 = new FormData();
      formData2.append('image', file);
      formData2.append('model', 'vit-gpt2');

      // Make both API calls simultaneously
      const [generalResponse, vitResponse] = await Promise.all([
        fetch(
          `${
            import.meta.env.VITE_GENERAL_API_URL || 'http://localhost:5000'
          }/predict`,
          {
            method: 'POST',
            body: formData1,
          }
        ),
        fetch(
          `${
            import.meta.env.VITE_VIT_GPT2_API_URL || 'http://localhost:5002'
          }/predict`,
          {
            method: 'POST',
            body: formData2,
          }
        ),
      ]);

      // Process General model response
      if (generalResponse.ok) {
        const generalData = await generalResponse.json();
        setGeneralResult({
          imageURL: `http://localhost:5000${
            generalData.image_url
          }?t=${Date.now()}`,
          caption: generalData.caption,
          model: 'General (COCO)',
          type: 'Attention Map',
        });
      } else {
        const generalError = await generalResponse.json();
        setGeneralResult({
          error: generalError.error || 'Unknown error',
          model: 'General (COCO)',
        });
      }

      // Process ViT model response
      if (vitResponse.ok) {
        const vitData = await vitResponse.json();
        setVitResult({
          imageURL: `http://localhost:5002${vitData.image_url}?t=${Date.now()}`,
          caption: vitData.caption,
          model: 'ViT-GPT2',
          type: 'Original Image',
        });
      } else {
        const vitError = await vitResponse.json();
        setVitResult({
          error: vitError.error || 'Unknown error',
          model: 'ViT-GPT2',
        });
      }
    } catch (error) {
      console.error('Comparison error:', error);
      alert('Failed to connect to one or more servers.');
    } finally {
      setIsLoading(false);
    }
  };

  const openModal = (imageURL) => {
    setModalImage(imageURL);
    setShowModal(true);
  };

  return (
    <div className='min-h-screen bg-gray-900 text-white p-4 sm:p-6 lg:p-10 overflow-x-hidden'>
      <Nav />
      <div className='relative isolate px-4 sm:px-6 lg:px-8 pt-14'>
        <div
          aria-hidden='true'
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
          />
        </div>

        <div className='max-w-7xl mx-auto py-12'>
          {/* Header */}
          <div className='text-center mb-12'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent'>
              Model Comparison
            </h2>
            <p className='text-lg sm:text-xl text-gray-300 mb-6 max-w-3xl mx-auto'>
              Compare the performance of{' '}
              <span className='text-blue-400 font-semibold'>
                General COCO Model
              </span>{' '}
              and{' '}
              <span className='text-purple-400 font-semibold'>
                ViT-GPT2 Transformer
              </span>{' '}
              side by side
            </p>
          </div>

          {/* Upload Section */}
          <div className='flex flex-col items-center mb-12'>
            <div className='bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700 w-full max-w-md'>
              <h3 className='text-xl font-semibold text-center mb-6'>
                Upload Image for Comparison
              </h3>

              <input
                type='file'
                accept='image/*'
                onChange={handleFileChange}
                className='block w-full text-sm text-gray-300 file:mr-4 file:py-3 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-500 mb-6 cursor-pointer'
              />

              <button
                onClick={handleCompare}
                disabled={isLoading || !file}
                className='w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300'
              >
                {isLoading ? (
                  <div className='flex items-center justify-center'>
                    <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2'></div>
                    Comparing Models...
                  </div>
                ) : (
                  'Compare Both Models'
                )}
              </button>
            </div>
          </div>

          {/* Results Section */}
          {(generalResult || vitResult) && (
            <div className='grid lg:grid-cols-2 gap-8'>
              {/* General Model Results */}
              <div className='bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl p-6 border border-blue-700/50'>
                <div className='flex items-center mb-4'>
                  <div className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3'>
                    <span className='text-lg'>🌍</span>
                  </div>
                  <h3 className='text-xl font-bold text-white'>
                    General COCO Model
                  </h3>
                </div>

                {generalResult ? (
                  <>
                    {generalResult.error ? (
                      <div className='text-red-400 text-center py-8'>
                        <p className='text-lg'>
                          ❌ Error: {generalResult.error}
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className='mb-4'>
                          <p className='text-blue-200 mb-2'>
                            <strong>Type:</strong> {generalResult.type}
                          </p>
                          <img
                            src={generalResult.imageURL}
                            alt='General model result'
                            onClick={() => openModal(generalResult.imageURL)}
                            className='w-full rounded-lg border border-blue-700 cursor-pointer hover:opacity-90 transition-opacity'
                          />
                        </div>
                        <div className='bg-blue-900/30 rounded-lg p-4'>
                          <p className='text-blue-100'>
                            <strong className='text-blue-300'>Caption:</strong>{' '}
                            {generalResult.caption}
                          </p>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className='text-center py-8 text-gray-400'>
                    <p>Waiting for comparison...</p>
                  </div>
                )}
              </div>

              {/* ViT Model Results */}
              <div className='bg-gradient-to-br from-purple-900/30 to-violet-900/30 rounded-2xl p-6 border border-purple-700/50'>
                <div className='flex items-center mb-4'>
                  <div className='w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3'>
                    <span className='text-lg'>🤖</span>
                  </div>
                  <h3 className='text-xl font-bold text-white'>
                    ViT-GPT2 Transformer
                  </h3>
                </div>

                {vitResult ? (
                  <>
                    {vitResult.error ? (
                      <div className='text-red-400 text-center py-8'>
                        <p className='text-lg'>❌ Error: {vitResult.error}</p>
                      </div>
                    ) : (
                      <>
                        <div className='mb-4'>
                          <p className='text-purple-200 mb-2'>
                            <strong>Type:</strong> {vitResult.type}
                          </p>
                          <img
                            src={vitResult.imageURL}
                            alt='ViT model result'
                            onClick={() => openModal(vitResult.imageURL)}
                            className='w-full rounded-lg border border-purple-700 cursor-pointer hover:opacity-90 transition-opacity'
                          />
                        </div>
                        <div className='bg-purple-900/30 rounded-lg p-4'>
                          <p className='text-purple-100'>
                            <strong className='text-purple-300'>
                              Caption:
                            </strong>{' '}
                            {vitResult.caption}
                          </p>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className='text-center py-8 text-gray-400'>
                    <p>Waiting for comparison...</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Comparison Analysis */}
          {generalResult &&
            vitResult &&
            !generalResult.error &&
            !vitResult.error && (
              <div className='mt-12 bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700'>
                <h3 className='text-2xl font-bold text-white mb-6 text-center'>
                  📊 Comparison Analysis
                </h3>
                <div className='grid md:grid-cols-2 gap-6 text-gray-300'>
                  <div>
                    <h4 className='text-lg font-semibold text-blue-400 mb-3'>
                      General Model Characteristics
                    </h4>
                    <ul className='space-y-2'>
                      <li>
                        • <strong>Architecture:</strong> ResNet-101 + LSTM with
                        Attention
                      </li>
                      <li>
                        • <strong>Visualization:</strong> Spatial attention maps
                      </li>
                      <li>
                        • <strong>Training:</strong> COCO dataset (general
                        objects)
                      </li>
                      <li>
                        • <strong>Strength:</strong> Detailed attention
                        visualization
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className='text-lg font-semibold text-purple-400 mb-3'>
                      ViT Transformer Characteristics
                    </h4>
                    <ul className='space-y-2'>
                      <li>
                        • <strong>Architecture:</strong> Vision Transformer +
                        GPT-2
                      </li>
                      <li>
                        • <strong>Approach:</strong> Patch-based image
                        processing
                      </li>
                      <li>
                        • <strong>Training:</strong> Large-scale pre-training
                      </li>
                      <li>
                        • <strong>Strength:</strong> Modern transformer
                        architecture
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
        </div>

        {/* Modal for full-size images */}
        {showModal && (
          <div className='fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center'>
            <div className='relative'>
              <button
                onClick={() => setShowModal(false)}
                className='absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-50 px-3 py-1 rounded-full hover:bg-opacity-70'
              >
                ×
              </button>
              <img
                src={modalImage}
                alt='Full view'
                className='max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg'
              />
            </div>
          </div>
        )}

        <div
          aria-hidden='true'
          className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
          />
        </div>
      </div>
    </div>
  );
}

export default Comparison;
