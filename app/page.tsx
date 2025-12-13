'use client'
import Banner from "@/components/Banner";
import Hello from "@/components/Hello";
import RollingDigits from "@/components/RollingDigits";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Home() {
  const helloRef = useRef(null)
  const bannerRef = useRef(null)
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", delay: 2, } });
    tl.to(helloRef.current, {
      y: -100,
      duration: 1,
      ease: "power2.inOut"
    })
      .to(
        helloRef.current,
        {
          yPercent: -100,
          duration: 1.25,
          ease: "power4.inOut"
        },
        0
      )
      .to(
        bannerRef.current,
        {
          duration: 1,
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: "power2.out"
        },
        0.6
      );
  }, []);
  return (
    <div className="">
      <div className="fixed " ref={helloRef}>
        <Hello />
      </div>
      <div ref={bannerRef} className="translate-y-[100px] opacity-0">
        <Banner />
      </div>
    </div>
  );
}
