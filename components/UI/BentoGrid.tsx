'use client'
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json"; 
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id : Number;
  img? : string ;
  imgClassName? : string ;
  titleClassName? : string ;
  spareImg? : string ;
}) => {
  const [copied, setcopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('shiroleprathamesh@gmail.com');
    setcopied(true);
  };
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input  bg-white border border-white[0.2] justify-between flex flex-col space-y-4 ",
        className
      )}
      style={{
        background: 'rgb(2,0,36)',
backgroundColor:' linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(29,9,121,1) 35%, rgba(152,57,193,1) 100%)'
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full" `}>
        <div className="w-full h-full absolute">
          {img && (
            <img
            src= {img}
            alt = {img}
            className= {cn(imgClassName,'object-cover, object-center')}
            />
          )}

        </div>
          <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}  `}>
          {spareImg && (
            <img
            src= {spareImg}
            alt = {spareImg}
            className= {cn(imgClassName,'object-cover object-center w-full h-full')}
            />
          )}
          </div>
          {id ===6 && 
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 flex font-bold justify-center items-center text-white"/> */}
          </BackgroundGradientAnimation>
          }
          <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 px-5 p-5 lg:p-10')}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
          {title}
        </div>
        
          
          
          {id === 2 && <GlobeDemo/>}
          {id === 3 &&  (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -top-3 -right-2 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-3">
              {['React.JS', 'Next.JS', 'Flutter'].map((item)=> (
                <span key={item} className="py-4 lg:py-3 px-3 lg:px-4 text-xs lg:text-base opacity-60 lg:opacity-100 rounded-2xl text-center bg-[#10132E]">
                  {item}
                </span>
                
              )) }
              <span className="py-4 px-3 rounded=lg text-center bg-[#10132E] "/>
              </div>
              <div className="flex flex-col gap-3 lg:gap-3">
              <span className="py-4 px-3 rounded=lg text-center bg-[#10132e] "/>
              {['Python', 'Tailwind', 'Javascript'].map((item)=> (
                <span key={item} className="py-4 lg:py-3 px-3 lg:px-4 text-xs lg:text-base opacity-60 lg:opacity-100 rounded-2xl text-center bg-[#10132E]">
                  {item}
                </span>
                
              )) }
              
              </div>

            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -right-5 bottom-0`}>
              <Lottie options={{
                loop : copied,
                autoplay: copied ,
                animationData,
                rendererSettings : {
                  preserveAspectRatio : 'xMidyMid slice'
                }

              }}/>
              </div>
              <MagicButton 
              title={ copied ? 'Email copied' : 'Copy My Email'}
              icon = {<IoCopyOutline/>}
              position="left"
              otherClasses=" bg-[#161a31]"
              handleClick={handleCopy}
              />
            </div>
          )}
      </div>
      
    </div>
    
    </div>
  );
};
