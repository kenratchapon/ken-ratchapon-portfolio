import React from "react";
import { projectsData } from "../lib/data";
import Project from "./Project";

export default function Projects() {

  return (
    <section name='work' className='w-full bg-gray-50 bg-opacity-75 to-90% text-black relative pt-10'>
      <div className="bg-[#8cffa9] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
      <div className="bg-[#ff9595] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>
      <div className="max-w-[1000px]  mx-auto px-4 w-full h-full">
        <div className='pb-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-500'>Projects</p>
                    <p className='pt-4'>check out some of my recent projects</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}