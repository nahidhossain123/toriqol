'use client'
import Banner from "@/components/Banner";
import Hello from "@/components/Hello";
import MyOverview from "@/components/MyOverview";
import WorkTogether from "@/components/WorkTogether";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Home() {
  const helloRef = useRef(null)
  const bannerRef = useRef(null)
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", delay: 2, } });
    tl.to(
      helloRef.current,
      {
        yPercent: -100,
        duration: 1.25,
        ease: "power4.inOut"
      },
      0
    )

  }, []);
  return (
    <div className="">
      <div className="fixed z-40" ref={helloRef}>
        <Hello />
      </div>
      <div ref={bannerRef} className="">
        <Banner />
      </div>
      <div className="">
        <MyOverview />
      </div>
      <div className="">
        <WorkTogether />
      </div>
    </div>
  );
}
