import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';

const Carousel = () => {
  useEffect(() => {
    new Glide('.glide-01', {
      type: 'carousel',
      perView: 1,
      autoplay: 3000
    }).mount();
  }, []);

  return (
    <div className="relative w-full glide-01 mt-24 mb-16">
      <div className="overflow-hidden" data-glide-el="track">
        <ul className="relative w-full overflow-hidden p-0 whitespace-no-wrap flex flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform]">
          <li><img src="./img/IMG_20220708_230325335.jpg" className="w-full max-w-full max-h-full m-auto" /></li>
          <li><img src="./img/IMG_20220708_213752128.jpg" className="w-full max-w-full max-h-full m-auto" /></li>
          <li><img src="./img/IMG_20220708_215338182.jpg" className="w-full max-w-full max-h-full m-auto" /></li>
          <li><img src="./img/IMG_20220708_221510451.jpg" className="w-full max-w-full max-h-full m-auto" /></li>
          <li><img src="./img/IMG_20220708_222913579.jpg" className="w-full max-w-full max-h-full m-auto" /></li>
          <li><img src="./img/IMG_20220708_224230002.jpg" className="w-full max-w-full max-h-full m-auto" /></li>
          <li><img src="./img/IMG_20220708_212404794.jpg" className="w-full max-w-full max-h-full m-auto" /></li>
          <li><img src="./img/IMG_20220708_212601821.jpg" className="w-full max-w-full max-h-full m-auto" /></li>
          <li><img src="./img/IMG_20220708_212643722.jpg" className="w-full max-w-full max-h-full m-auto" /></li>
          <li><img src="./img/IMG_20220708_094747536.jpg" className="w-full max-w-full max-h-full m-auto" /></li>
        </ul>
      </div>
      <div className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 " data-glide-el="controls">
        <button className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full lg:w-12 lg:h-12 text-slate-700 border-slate-700 hover:text-slate-900 hover:border-slate-900 focus-visible:outline-none bg-white/20"
          data-glide-dir="<" aria-label="prev slide">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            className="w-5 h-5">
            <title>prev slide</title>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
        </button>
        <button className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full lg:w-12 lg:h-12 text-slate-700 border-slate-700 hover:text-slate-900 hover:border-slate-900 focus-visible:outline-none bg-white/20"
          data-glide-dir=">" aria-label="next slide">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
            className="w-5 h-5">
            <title>next slide</title>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
