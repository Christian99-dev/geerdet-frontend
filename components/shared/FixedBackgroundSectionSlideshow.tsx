"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function FixedBackgroundSectionSlideshow({
  images,
  interval = 5000,
  color,
  children,
  className,
}: {
  images:  {
    src: string;
    alt: string;
  }[];
  interval?: number;
  color: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <section className={`relative ${className}`}>
      {images.map((image, i) => (
        <Image
          key={i}
          src={image.src}
          width={1000}
          height={1000}
          alt={image.alt}
          className={`absolute inset-0 w-full h-full object-cover duration-images transition-opacity ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className={`absolute inset-0 bg-${color}`}></div>
      <div className={`absolute z-10 top-0 left-0 h-full w-full`}>{children}</div>
    </section>
  );
}
