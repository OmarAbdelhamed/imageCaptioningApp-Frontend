import Nav from '../components/nav';

function About() {
  return (
    <div className='h-screen overflow-y-auto bg-gray-900 text-white p-10'>
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
            className='relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75'
          />
        </div>

        <div className='max-w-6xl mx-auto py-20 space-y-12'>
          <div className='text-center'>
            <h2 className='text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent'>
              Image Captioning System
            </h2>
            <p className='text-xl text-gray-300 mb-4 max-w-4xl mx-auto'>
              <strong className='text-indigo-400'>
                Advanced Deep Learning Project
              </strong>{' '}
              developed by{' '}
              <strong className='text-white'>Omar Abdelhamed</strong> as a
              graduation project at{' '}
              <strong className='text-white'>
                Tekirdağ Namık Kemal University
              </strong>
            </p>
            <p className='text-lg text-gray-400 max-w-4xl mx-auto'>
              A comprehensive multi-model system that generates accurate,
              context-aware captions for general scenes, medical images, and
              specialized vision transformer analysis.
            </p>
          </div>

          {/* Project Overview */}
          <div className='bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700'>
            <h3 className='text-3xl font-bold text-white mb-6 flex items-center'>
              <span className='text-3xl mr-3'>🎯</span>
              Project Overview
            </h3>
            <div className='grid md:grid-cols-2 gap-6 text-gray-300'>
              <div>
                <h4 className='text-xl font-semibold text-indigo-400 mb-3'>
                  Objectives
                </h4>
                <ul className='space-y-2'>
                  <li>
                    • Generate human-like captions for diverse image types
                  </li>
                  <li>• Provide specialized medical image analysis</li>
                  <li>• Implement state-of-the-art attention mechanisms</li>
                  <li>• Create an intuitive web interface for easy access</li>
                </ul>
              </div>
              <div>
                <h4 className='text-xl font-semibold text-indigo-400 mb-3'>
                  Key Features
                </h4>
                <ul className='space-y-2'>
                  <li>• Real-time image processing and captioning</li>
                  <li>• Visual attention map generation</li>
                  <li>• Multi-model architecture comparison</li>
                  <li>• Responsive modern web interface</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Three Models */}
          <div className='space-y-8'>
            <h3 className='text-3xl font-bold text-white text-center mb-8 flex items-center justify-center'>
              <span className='text-3xl mr-3'>🧠</span>
              Three Specialized Models
            </h3>

            {/* Model 1: General COCO */}
            <div className='bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-2xl p-8 border border-blue-700/50'>
              <div className='flex items-start space-x-6'>
                <div className='flex-shrink-0 w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-2xl'>
                  🌍
                </div>
                <div className='flex-1'>
                  <h4 className='text-2xl font-bold text-white mb-3'>
                    General Scene Captioning Model
                  </h4>
                  <p className='text-lg text-blue-200 mb-4'>
                    <strong>Dataset:</strong> COCO (Common Objects in Context) |{' '}
                    <strong>Port:</strong> 5000
                  </p>
                  <div className='space-y-3 text-gray-300'>
                    <p>
                      <strong className='text-blue-300'>Architecture:</strong>{' '}
                      Encoder-Decoder with Attention Mechanism
                    </p>
                    <p>
                      <strong className='text-blue-300'>Encoder:</strong>{' '}
                      Pre-trained ResNet-101 (ImageNet) for robust feature
                      extraction
                    </p>
                    <p>
                      <strong className='text-blue-300'>Decoder:</strong>{' '}
                      LSTM-based sequence generator with soft attention
                    </p>
                    <p>
                      <strong className='text-blue-300'>Training:</strong> 5
                      captions per image, 3 minimum word frequency
                    </p>
                    <p>
                      <strong className='text-blue-300'>Output:</strong> Natural
                      language captions + attention visualization maps
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Model 2: Medical MIMIC */}
            {/* <div className='bg-gradient-to-r from-red-900/30 to-pink-900/30 rounded-2xl p-8 border border-red-700/50'>
              <div className='flex items-start space-x-6'>
                <div className='flex-shrink-0 w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-2xl'>
                  🩺
                </div>
                <div className='flex-1'>
                  <h4 className='text-2xl font-bold text-white mb-3'>
                    Medical Image Analysis Model
                  </h4>
                  <p className='text-lg text-red-200 mb-4'>
                    <strong>Dataset:</strong> MIMIC-CXR (Medical Imaging) |{' '}
                    <strong>Port:</strong> 5001
                  </p>
                  <div className='space-y-3 text-gray-300'>
                    <p>
                      <strong className='text-red-300'>Specialization:</strong>{' '}
                      X-ray and radiological image interpretation
                    </p>
                    <p>
                      <strong className='text-red-300'>Architecture:</strong>{' '}
                      Same encoder-decoder with medical domain adaptation
                    </p>
                    <p>
                      <strong className='text-red-300'>Training:</strong>{' '}
                      Fine-tuned on medical terminology and anatomical
                      structures
                    </p>
                    <p>
                      <strong className='text-red-300'>Applications:</strong>{' '}
                      Automated radiology report generation, medical education
                    </p>
                    <p>
                      <strong className='text-red-300'>Output:</strong>{' '}
                      Medical-focused captions with attention on relevant
                      anatomical regions
                    </p>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Model 3: ViT-GPT2 */}
            <div className='bg-gradient-to-r from-purple-900/30 to-violet-900/30 rounded-2xl p-8 border border-purple-700/50'>
              <div className='flex items-start space-x-6'>
                <div className='flex-shrink-0 w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center text-2xl'>
                  🤖
                </div>
                <div className='flex-1'>
                  <h4 className='text-2xl font-bold text-white mb-3'>
                    Vision Transformer Model
                  </h4>
                  <p className='text-lg text-purple-200 mb-4'>
                    <strong>Architecture:</strong> ViT-GPT2 (Hugging Face) |{' '}
                    <strong>Port:</strong> 5002
                  </p>
                  <div className='space-y-3 text-gray-300'>
                    <p>
                      <strong className='text-purple-300'>Innovation:</strong>{' '}
                      State-of-the-art transformer-based architecture
                    </p>
                    <p>
                      <strong className='text-purple-300'>Encoder:</strong>{' '}
                      Vision Transformer (ViT) for image patch processing
                    </p>
                    <p>
                      <strong className='text-purple-300'>Decoder:</strong>{' '}
                      GPT-2 language model for natural text generation
                    </p>
                    <p>
                      <strong className='text-purple-300'>Advantages:</strong>{' '}
                      Superior semantic understanding, contextual awareness
                    </p>
                    <p>
                      <strong className='text-purple-300'>Output:</strong>{' '}
                      Highly accurate, natural language descriptions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className='bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700'>
            <h3 className='text-3xl font-bold text-white mb-6 flex items-center'>
              <span className='text-3xl mr-3'>⚙️</span>
              Technical Implementation
            </h3>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h4 className='text-xl font-semibold text-indigo-400 mb-4'>
                  Backend Architecture
                </h4>
                <div className='space-y-3 text-gray-300'>
                  <p>
                    <strong>Framework:</strong> Flask (Python) with CORS support
                  </p>
                  <p>
                    <strong>Model Loading:</strong> PyTorch with CUDA
                    acceleration
                  </p>
                  <p>
                    <strong>API Design:</strong> RESTful endpoints for each
                    model
                  </p>
                  <p>
                    <strong>Image Processing:</strong> PIL, OpenCV for
                    preprocessing
                  </p>
                  <p>
                    <strong>Deployment:</strong> Multi-port architecture (5000,
                    5001, 5002)
                  </p>
                </div>
              </div>
              <div>
                <h4 className='text-xl font-semibold text-indigo-400 mb-4'>
                  Frontend Technology
                </h4>
                <div className='space-y-3 text-gray-300'>
                  <p>
                    <strong>Framework:</strong> React 18 with modern hooks
                  </p>
                  <p>
                    <strong>Styling:</strong> Tailwind CSS for responsive design
                  </p>
                  <p>
                    <strong>Routing:</strong> React Router for navigation
                  </p>
                  <p>
                    <strong>State Management:</strong> useState for local state
                  </p>
                  <p>
                    <strong>UI/UX:</strong> Modern gradient design with loading
                    states
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance & Results */}
          <div className='bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700'>
            <h3 className='text-3xl font-bold text-white mb-6 flex items-center'>
              <span className='text-3xl mr-3'>📊</span>
              Performance & Features
            </h3>
            <div className='grid md:grid-cols-3 gap-6'>
              <div className='text-center p-6 bg-gradient-to-b from-green-900/30 to-green-800/30 rounded-xl border border-green-700/50'>
                <div className='text-3xl mb-3'>⚡</div>
                <h4 className='text-lg font-semibold text-green-300 mb-2'>
                  Real-time Processing
                </h4>
                <p className='text-gray-400 text-sm'>
                  Fast inference with optimized model loading and GPU
                  acceleration
                </p>
              </div>
              <div className='text-center p-6 bg-gradient-to-b from-blue-900/30 to-blue-800/30 rounded-xl border border-blue-700/50'>
                <div className='text-3xl mb-3'>👁️</div>
                <h4 className='text-lg font-semibold text-blue-300 mb-2'>
                  Attention Visualization
                </h4>
                <p className='text-gray-400 text-sm'>
                  Visual attention maps showing model focus areas during caption
                  generation
                </p>
              </div>
              <div className='text-center p-6 bg-gradient-to-b from-purple-900/30 to-purple-800/30 rounded-xl border border-purple-700/50'>
                <div className='text-3xl mb-3'>🎯</div>
                <h4 className='text-lg font-semibold text-purple-300 mb-2'>
                  High Accuracy
                </h4>
                <p className='text-gray-400 text-sm'>
                  Trained on large-scale datasets with beam search for optimal
                  results
                </p>
              </div>
            </div>
          </div>

          {/* Future Work */}
          <div className='bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-2xl p-8 border border-indigo-700/50'>
            <h3 className='text-3xl font-bold text-white mb-6 flex items-center'>
              <span className='text-3xl mr-3'>🚀</span>
              Future Enhancements
            </h3>
            <div className='grid md:grid-cols-2 gap-6 text-gray-300'>
              <ul className='space-y-3'>
                <li className='flex items-start'>
                  <span className='text-indigo-400 mr-2'>•</span>
                  <span>
                    Integration of latest transformer models (BLIP, CLIP)
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='text-indigo-400 mr-2'>•</span>
                  <span>Multi-language caption generation support</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-indigo-400 mr-2'>•</span>
                  <span>Video captioning and temporal understanding</span>
                </li>
              </ul>
              <ul className='space-y-3'>
                <li className='flex items-start'>
                  <span className='text-purple-400 mr-2'>•</span>
                  <span>Fine-tuning for domain-specific applications</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-purple-400 mr-2'>•</span>
                  <span>Model performance comparison dashboard</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-purple-400 mr-2'>•</span>
                  <span>API integration for third-party applications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          aria-hidden='true'
          className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className='relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75'
          />
        </div>
      </div>
    </div>
  );
}

export default About;
