import React from "react";
import Image from "next/image";
import Link from "next/link";

const BannerS2 = () => {
  const banners = [
    {
      src: "/bannerGrande.jpeg",
      alt: "Banner Grande",
      link: "/cashback-10",
      highlight: true,
    },
    {
      src: "/bannerM1.jpeg",
      alt: "Banner Médio 1",
      link: "/mais-vendidos",
    },
    {
      src: "/bannerM2.jpeg",
      alt: "Banner Médio 2",
      link: "/bem-estar",
    },
  ];

  return (
    <div className="py-2  ">
         <h1 className="text-4xl font-bold mb-10 mt-24 text-center text-gray-900">
        Mais qualidade de vida!
      </h1>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {banners.map((banner, idx) => (
          <Link
            key={idx}
            href={banner.link}
            className={`group block rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${banner.highlight ? "md:col-span-2 md:row-span-2" : ""
              }`}
          >
            <div
              className={`relative w-full ${banner.highlight ? "aspect-[4/3]" : "aspect-[4/3]"
                }`}
            >
              <Image
                src={banner.src}
                alt={banner.alt}
                fill
                className="object-cover rounded-2xl group-hover:brightness-110 transition-all duration-300"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BannerS2;
