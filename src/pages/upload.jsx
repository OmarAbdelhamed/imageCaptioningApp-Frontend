import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../components/nav';

function Upload() {
  const [file, setFile] = useState(null);
  const [imageURL, setImageURL] = useState('');
  const [caption, setCaption] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const model = queryParams.get('model') || 'general';

  // Determine backend URL based on model
  const backendURL =
    model === 'medical'
      ? import.meta.env.VITE_MEDICAL_API_URL || 'http://localhost:5001'
      : model === 'vit-gpt2'
      ? import.meta.env.VITE_VIT_GPT2_API_URL || 'http://localhost:5002'
      : import.meta.env.VITE_GENERAL_API_URL || 'http://localhost:5000';

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) {
      alert('Please select an image first.');
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append('image', file);
    formData.append('model', model);

    try {
      const res = await fetch(`${backendURL}/predict`, {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        setImageURL(`${backendURL}${data.image_url}?t=${Date.now()}`);
        setCaption(data.caption);
      } else {
        const data = await res.json();
        alert('Error: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      alert('Failed to connect to server.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='h-full bg-gray-900 text-white p-10 overflow-hidden'>
      <Nav />
      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <div
          aria-hidden='true'
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className='relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75'
          />
        </div>

        <div className='max-w-3xl mx-auto flex flex-col items-center h-screen justify-center'>
          <h2 className='text-4xl font-bold mb-4'>Upload an Image</h2>
          <p className='mb-6 text-lg text-gray-300'>
            Selected Model:{' '}
            <span className='font-semibold text-indigo-400'>{model}</span>
          </p>

          <input
            type='file'
            accept='image/*'
            onChange={handleFileChange}
            className='block w-[210px] max-w-xs text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-500 mb-4 cursor-pointer'
          />
          <br />
          <button
            onClick={handleUpload}
            disabled={isLoading}
            className='bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded text-white w-[400px] relative'
          >
            {isLoading ? (
              <div className='flex items-center justify-center'>
                <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2'></div>
                Generating...
              </div>
            ) : (
              'Generate Caption'
            )}
          </button>

          {imageURL && (
            <div className='mt-10 text-center'>
              <h3 className='text-2xl font-semibold mb-4'>
                {model === 'vit-gpt2' ? 'Original Image:' : 'Attention Map:'}
              </h3>
              <img
                src={imageURL}
                alt='Captioned'
                onClick={() => setShowModal(true)}
                className='w-full max-w-xl border border-gray-700 rounded shadow cursor-pointer'
              />
              <p className='mt-4 text-xl'>
                <strong>Caption:</strong> {caption}
              </p>
              <a href='/models'>
                <button className='bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded text-white w-[400px] mt-4'>
                  Change the Model
                </button>
              </a>
            </div>
          )}
        </div>

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
                src={imageURL}
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
            className='relative left-[calc(50%+3rem)] aspect-1155/678 w-100 -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75'
          />
        </div>
      </div>
    </div>
  );
}

export default Upload;
