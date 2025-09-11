'use client';

import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

interface BannerCarouselProps {
  images: { src: string; alt: string }[];
  imagesMD: { src: string; alt: string }[]; 
}

const BannerCarousel = ({ images, imagesMD }: BannerCarouselProps) => {
  const router = useRouter();
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'snap',
    slides: {
      perView: 1,
    },
  });

  useEffect(() => {

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile(); 
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  useEffect(() => {
    if (!slider) return;

    timer.current = setInterval(() => {
      slider.current?.next();
    }, 4000);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [slider]);

  const selectedImages = isMobile ? imagesMD : images;

  return (
    <div ref={sliderRef} className="keen-slider w-screen h-[85vh] relative">
      {selectedImages.map((image, index) => (
        <div key={index} className="keen-slider__slide relative w-full h-full">
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
          <div className="absolute bottom-16 left-8 z-10 text-black flex flex-col gap-4 max-w-md">
            <button
              onClick={() => router.push('/allProducts')}
              className="px-6 py-3 bg-black text-white rounded-full font-medium text-lg shadow-lg hover:bg-gray-800 transition"
            >
              COMPRE AGORA →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerCarousel;
