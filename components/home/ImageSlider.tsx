"use client"
import React, { MutableRefObject, useEffect, useState } from "react";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Icon from "@/components/shared/Icon";

function ThumbnailPlugin(mainRef: MutableRefObject<any>): KeenSliderPlugin {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide: HTMLElement) => {
                slide.classList.remove("active");
            });
        }

        function addActive(idx: number) {
            slider.slides[idx].classList.add("active");
        }

        function addClickEvents() {
            slider.slides.forEach((slide: HTMLElement, idx: number) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx);
                });
            });
        }

        slider.on("created", () => {
            if (!mainRef.current) return;
            addActive(slider.track.details.rel);
            addClickEvents();
            mainRef.current.on("animationStarted", (main: any) => {
                removeActive();
                const next = main.animator.targetIdx || 0;
                addActive(main.track.absToRel(next));
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
            });
        });
    };
}

interface ImageSliderProps {
    images: string[];
}

export default function ImageSlider({ images }: ImageSliderProps): JSX.Element {
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({ initial: 0 });
    const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
        { initial: 0, slides: { perView: 4, spacing: 10 } },
        [ThumbnailPlugin(instanceRef)]
    );
    const [activeImage, setActiveImage] = useState<string | null>(null);

    useEffect(() => { 
        document.body.style.overflow = activeImage ? "hidden" : "auto";
    }, [activeImage]);
    

    return (
        <div className="w-full max-w-[700px] mx-auto relative">
            <div ref={sliderRef} className="keen-slider mb-5">
                {images.map((img, index) => (
                    <div key={index} className="keen-slider__slide bg-gray-25 flex justify-center items-center">
                        <img
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className="object-contain h-auto md:h-[500px] cursor-pointer"
                            onClick={() => setActiveImage(img)}
                        />
                    </div>
                ))}
            </div>

            <div ref={thumbnailRef} className="keen-slider thumbnail cursor-pointer">
                {images.map((img, index) => (
                    <div key={index} className="keen-slider__slide h-[100px]">
                        <img src={img} alt={`Thumbnail ${index + 1}`} className="h-full w-full object-cover" />
                    </div>
                ))}
            </div>

            {activeImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div
                        className="absolute top-4 right-4 cursor-pointer"
                        onClick={() => setActiveImage(null)}
                    >
                        <Icon name="close" size="medium" color="white" />
                    </div>
                    <img src={activeImage} alt="Enlarged" className="max-w-full max-h-full cursor-pointer" />
                </div>
            )}
        </div>
    );
}
