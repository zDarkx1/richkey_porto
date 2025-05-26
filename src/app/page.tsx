"use client";
import '@radix-ui/themes/styles.css';
import { MdDownloading } from "react-icons/md";
import { TextGenerateEffect } from './components/ui/text-generate-effect';
import Last from './components/Last/page';

export default function Home() {
  const words = `Alrizky Filardhi Budiman`;
  return (
   <div className='wrapper'>
      <div className='py-8 my-8 md:pt-[50px] pt-[50px]'>
        <p className='text-[14px] font-normal dark:text-white text-dark pb-[20px]'>Hello World, I am 👋</p>
        <h1 className="text-[56px] font-semibold dark:text-white text-dark leading-9 font-display -z-[999]"> <TextGenerateEffect words={words} className='sticky -z-[999]'/></h1>
        <h2 className="text-[14px] font-normal dark:text-white text-dark pt-[20px] pb-[5px]">A passionate Software Engineer, I'm currently a student at Vocational School 1 Cimahi, </h2>
        <p className='text-[14px] font-normal dark:text-white text-dark pt-[12px] pb-[20px]'>I'm enthusiastic about Cyber Security, Cloud Engineering, and Web Development.</p>
        <div className="flex flex-row items-center gap-3 pb-5">
            <span className="rounded-full border border-red-500 bg-red-500 py-1 px-1"></span> Not Available for Recruitment Yet xD
        </div> 
        <div className="pt-3 pb-3">
          <a href="" className="inline-flex items-center gap-3 shadow-md py-2 px-2 rounded-full bg-slate-300 dark:text-white text-dark hover:bg-slate-500 hover:text-white dark:bg-slate-700"><MdDownloading/> Download My CV</a> 
        </div>
      </div>
      <Last/>
   </div>
  );
}
