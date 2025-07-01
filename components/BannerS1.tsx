'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation'; 


interface BannerProps {
  src: string;
  alt: string;
}

const Banner = ({ src, alt }: BannerProps) => {
  const router = useRouter(); 

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '85vh',
        overflow: 'hidden',
        background: 'linear-gradient(to bottom, #98FB98, #ADD8E6)',
      }}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectPosition="center"
        quality={100}
        priority
      />


      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '8%',
          zIndex: 2,
          color: '#000',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          maxWidth: '500px',
        }}
      >
      
        <div
          style={{
            padding: '0.4rem 1rem',
            border: '1px solid #000',
            borderRadius: '9999px',
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontWeight: 500,
            backgroundColor: 'rgba(255,255,255,0.6)',
            width: 'fit-content',
          }}
        >
          PROMOÇÕES LIMITADAS POR TEMPO
        </div>

 
        <div
          style={{
            fontSize: '0.9rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            opacity: 0.8,
          }}
        >
          Já conhece os nossos produtos essenciais?
        </div>


        <h2
          style={{
            fontSize: '2rem',
            lineHeight: 1.3,
            fontWeight: 700,
          }}
        >
          Descubra combinações ideais <br />
          para cuidar do seu bem-estar <br />
          e manter sua energia no topo.
        </h2>


        <div>
          <button
            onClick={() => router.push('/allProducts')} 
            style={{
              padding: '0.9rem 2rem',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '9999px',
              fontSize: '1rem',
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)',
            }}
          >
            COMPRE AGORA
            <span style={{ fontSize: '1.2rem' }}>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
