"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { selectedWork } from "@/lib/constant/constant";


const ListWork = () => {
  return (
    <ProjectGallery />
  )
}

function ProjectGallery() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const imgElementRef = useRef(null);
  const viewBtnRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const isVisible = useRef(false);

  const lerp = (start, end, t) => start * (1 - t) + end * t;

  useEffect(() => {
    const animate = () => {
      if (!imageRef.current) return;

      currentPos.current.x = lerp(
        currentPos.current.x,
        mousePos.current.x,
        0.1
      );
      currentPos.current.y = lerp(
        currentPos.current.y,
        mousePos.current.y,
        0.1
      );

      gsap.set(imageRef.current, {
        x: currentPos.current.x,
        y: currentPos.current.y,
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      mousePos.current.x = e.clientX - rect.left - 150;
      mousePos.current.y = e.clientY - rect.top - 100;
    };

    el.addEventListener("mousemove", onMouseMove);
    return () => el.removeEventListener("mousemove", onMouseMove);
  }, []);

  const handleMouseEnter = (index, imageUrl) => {
    setActiveIndex(index);

    if (!isVisible.current) {
      setCurrentImage(imageUrl);
      isVisible.current = true;

      if (imgElementRef.current) {
        imgElementRef.current.src = imageUrl;
      }

      gsap.killTweensOf(imageRef.current);
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.88, clipPath: "inset(100% 0% 0% 0%)" },
        {
          opacity: 1,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.5,
          ease: "power3.out",
        }
      );
    } else {
      if (imgElementRef.current) {
        gsap.to(imgElementRef.current, {
          opacity: 0,
          scale: 1.05,
          duration: 0.2,
          ease: "power2.in",
          onComplete: () => {
            setCurrentImage(imageUrl);
            if (imgElementRef.current) {
              imgElementRef.current.src = imageUrl;
            }
            gsap.to(imgElementRef.current, {
              opacity: 1,
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          },
        });
      }
    }

    gsap.to(viewBtnRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: "back.out(1.7)",
    });
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
    isVisible.current = false;

    gsap.killTweensOf(imageRef.current);
    gsap.to(imageRef.current, {
      opacity: 0,
      scale: 0.9,
      clipPath: "inset(0% 0% 100% 0%)",
      duration: 0.4,
      ease: "power3.in",
    });

    gsap.to(viewBtnRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
    });
  };

  return (
    <section className="relative min-h-screen bg-black/90 text-white font-poppins">
      <div className="mb-8 flex justify-between p-section gap-16">
        <h1 className="text-4xl flex-1 font-raleway uppercase font-semibold flex gap-1">
          Selected Work <span className="font-poppins text-sm">(2)</span>
        </h1>
         <h1 className='md:text-xl xl:text-2xl flex-3'>Setiap karya merepresentasikan pendekatan yang terstruktur dan berorientasi pada efektivitas. Kami berfokus pada solusi yang relevan, fungsional, dan memberikan nilai nyata.</h1>
      </div>

      <div
        ref={imageRef}
        className="pointer-events-none absolute left-0 top-0 z-30 overflow-hidden"
        style={{
          width: "300px",
          height: "200px",
          opacity: 0,
          clipPath: "inset(100% 0% 0% 0%)",
        }}
      >
        <div className="relative w-full h-full">
            {
                currentImage && 
                <Image
                ref={imgElementRef ? imgElementRef : null}
                src={currentImage}
                alt="Project preview"
                fill
                className="object-center object-cover"/>
            }
        </div>

        <div
          ref={viewBtnRef}
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: 0, transform: "scale(0)" }}
        >
        </div>
      </div>

      <div className="border-t" ref={containerRef}>
        {selectedWork.map((project, index) => (
          <ProjectRow
            key={project.id}
            project={project}
            index={index}
            isActive={activeIndex === index}
            isAnyActive={activeIndex !== null}
            onMouseEnter={() =>
              handleMouseEnter(index, project.imageUrl)
            }
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
  isActive,
  isAnyActive,
  onMouseEnter,
  onMouseLeave,
  key
}) {
  const rowRef = useRef(null);

  useEffect(() => {
    if (!rowRef.current) return;

    gsap.to(rowRef.current, {
      x: isActive ? 8 : 0,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [isActive]);

  const isInactive = isAnyActive && !isActive;

  return (
    <div
      ref={rowRef}
      className="cursor-pointer border-b px-4 md:px-8 xl:px-20 py-8 flex justify-between items-center"
      style={{ opacity: isInactive ? 0.3 : 1 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
        <h2 className="text-xl flex gap-1 flex-1">
            <span className="text-sm">({ index + 1 })</span>
            {project.name}
        </h2>
        <div className="flex gap-2 flex-2 justify-center">
            {
                project.tags.map((tool, i) => <div className="px-4 py-2 bg-orange-300 text-black/90 rounded-[20px]" key={i}>{tool}</div>)
            }
        </div>
        <div className="flex-1">
            { project.description }
        </div>
    </div>
  );
}

export default ListWork