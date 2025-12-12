'use client'
import Banner from "@/components/Banner";
import Hello from "@/components/Hello";
import RollingDigits from "@/components/RollingDigits";

export default function Home() {

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div>
        <Hello />
      </div>
      {/* <Banner /> */}
    </div>
  );
}
