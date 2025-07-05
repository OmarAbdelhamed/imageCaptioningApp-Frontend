import Nav from '../components/nav';
import imagemodle1 from '../assets/modelscene.png';
import robot from '../assets/robot.jpg';
import xray from '../assets/xray.png';
const callouts = [
  {
    name: 'General Scene Captioning',
    description: 'COCO Dataset Model',
    imageSrc: imagemodle1,
    imageAlt: 'model 1',
    href: '/upload?model=general',
  },
  {
    name: 'Medical Image Analysis',
    description: 'MIMIC-CXR X-Ray Model',
    imageSrc: xray,
    imageAlt: 'model2',
    href: '/upload?model=medical',
  },
  {
    name: 'Vision Transformer',
    description: 'ViT-GPT2 Model',
    imageSrc: robot,
    imageAlt: 'model3',
    href: '/upload?model=vit-gpt2',
  },
];

export default function ModelsSection() {
  return (
    <div className='bg-gray-900 min-h-screen'>
      <Nav />
      <div className='relative isolate px-6 pt-14 lg:px-8 pb-16'>
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
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8'>
          <div className='mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32'>
            <h2 className='text-center text-5xl font-bold text-slate-200'>
              Our Models
            </h2>
            <p className='text-center text-2xl text-gray-400 mt-10'>
              Choose the model that suits your needs
            </p>

            <div className='mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6'>
              {callouts.map((callout) => (
                <div
                  key={callout.name}
                  className='group relative flex flex-col items-center '
                >
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className='w-[500px] rounded-lg mx-[30px] bg-slate-200 object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square'
                  />
                  <h3 className=' mt-6 text-lg text-gray-300'>
                    <a href={callout.href}>
                      <span className=' absolute inset-0 text-left' />
                      {callout.name}
                    </a>
                  </h3>
                  <p className=' text-2xl font-semibold text-slate-200'>
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Comparison Section */}
            <div className='mt-16 text-center'>
              <div className='bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 backdrop-blur-sm border border-indigo-700/50'>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  🔄 Compare Models Side by Side
                </h3>
                <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
                  See how our General COCO Model and ViT-GPT2 Transformer
                  perform on the same image. Perfect for evaluating different
                  approaches to image captioning.
                </p>
                <a
                  href='/comparison'
                  className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105'
                >
                  Start Model Comparison
                  <svg
                    className='ml-2 w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M13 7l5 5m0 0l-5 5m5-5H6'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden='true'
          className='absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl'
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
