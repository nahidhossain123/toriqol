'use client'
import Banner from "@/components/Banner";
import Features from "@/components/Projects1";
import Hello from "@/components/Hello";
import MyOverview from "@/components/MyOverview";
import MyStatistics from "@/components/MyStatistics";
import ReviewsRatings from "@/components/ReviewsRatings";
import WorkSamples from "@/components/WorkSamples";
import WorkTogether from "@/components/WorkTogether";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Projects1 from "@/components/Projects1";
import Projects2 from "@/components/Projects2";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Download from "@/components/Download";
import PhotoGallery from "@/components/PhotoGallery";

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
      <div className="">
        <WorkSamples />
      </div>
      <div className="">
        <MyStatistics />
      </div>
      <div className="">
        <ReviewsRatings />
      </div>
      <div className="">
        <Projects1 />
      </div>
      <div className="">
        <Projects2 />
      </div>
      <div className="">
        <Portfolio />
      </div>
      <div className="">
        <About />
      </div>
      <div className="">
        <Download />
      </div>
      <div className="">
        <Contact />
      </div>
      <div className="">
        <PhotoGallery />
      </div>
    </div>
  );
}
