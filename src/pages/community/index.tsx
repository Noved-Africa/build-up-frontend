import React, { useState, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import Newsletter from "@/components/newsletter";
import image1 from "public/images/image1.png"
import image from "public/images/image.png"
import { HiOutlineLightBulb } from "react-icons/hi";


const community = () => {

  return(
    <>
      <Head>
				<title>Community | Build-Up Africa</title>
			</Head>

      <div className="z-5 sm:bg-emerald-100 lg:bg-inherit lg:text-white md:mt-0  md:pb-44 sm:-mt-3 sm:pb-36 sm:m-0 lg:mt-40 ml-20 absolute">
        <h4 className="font-Consolas lg:pt-14 sm:text-lg sm:-mb-10 sm:mt-10 sm:ml-10 md:text-xl lg:text-2xl">Connect, Learn, Grow.</h4>
        <h1 className="lg:mt-16 sm:mt-16 sm:ml-10 lg:text-6xl sm:text-4xl md:text-3xl font-Martel">Vibrant Community Of <br/> Individuals</h1>
        <p className="lg:mt-5 sm:mt-5 sm:mb-20 md:w-5/12 sm:text-sm lg:text-lg sm:ml-10 font-Perpetua">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem reiciendis animi consectetur modi fugiat recusandae ipsum, saepe voluptate inventore consequuntur magni eum officiis rem iste? Nobis ea natus dignissimos consequuntur.</p>
        <p className="mt-10 md:block sm:inline sm:py-2 sm:px-36 sm:ml-10 sm:-mr-56 lg:text-lg md:w-48 md:-mt-14 lg:w-64 text-white sm:w-screen rounded md:px-2 md:text-sm lg:pt-1 text-center bg-green-600 h-10"><a href="#">Join the community</a></p>
      </div>
      
      <Image className="sm:collapse md:collapse lg:visible" src={image1} alt="community_image" width={1600} height={500}/>
      <svg className="lg:-mt-80 lg:-mb-80 sm:mt-20 md:absolute md:-mt-80 sm:absolute " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      
      <main className="mx-10 lg:-mt-32 md:-mt-44 sm:relative sm:pt-20 sm:mt-24">
        <div className="lg:mt-5">
          
          <div>
            <p className="font-bold sm:pb-10 text-4xl font-Martel">About the Community</p>

            <div>
            <Image className="md:w-5/12 h-96 md:-mt-20 lg:w-5/12 md:w-5/12 md:float-right md:mt-0 sm:w-full lg:-mt-20 sm:pb-10" src={image} alt="community_image2" width={600} height={400}/>
          </div>

            <p className="md:w-6/12 font-Perpetua text-lg md:-mt-6 lg:w-6/12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia dolorum voluptates placeat perspiciatis odio. Odit cum explicabo architecto, sunt reprehenderit nostrum voluptatem id, incidunt cupiditate iusto facere, cumque sint hic architecto, sunt reprehenderit nostrum.</p><br/>
            <p className="md:w-6/12 font-Perpetua text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dicta iure suscipit quasi natus, culpa tenetur ratione sapiente nobis magni facilis deleniti ipsa harum cupiditate, distinctio voluptatibus eveniet vel minima eaque quo modi? Iusto cum laudantium culpa tenetur ratione sapiente nobis magni facilis deleniti ipsa harum cupiditate dignissimos voluptatibus dolorem culpa tenetur ratione sapiente nobis magni facilis deleniti ipsa harum cupiditate tempore consequatur velit ex fugiat magnam animi voluptates eveniet, facilis ipsam!</p>
          </div>
          
        </div>

        <div className="text-center sm:mx-5 mt-20 md:grid grid-rows-3 grid-flow-col gap-4 sm:-mb-80">
          <div className="p-5 sm:mb-24 lg:w-96 md:w-64 border rounded hover:bg-green-50 hover:cursor-pointer md:-mt-56  border-green-300 row-start-2 row-span-2 lg:-mt-64 h-48">
            <HiOutlineLightBulb className="mx-auto"/>
            <p className="font-Martel text-green-500 text-2xl font-bold">Community Mission</p>
            <p className="font-Perpetua">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates cumque nemo vitae. Autem, molestiae quisquam?</p>
          </div>
          <div className="p-5 md:w-64 -mt-20 border lg:w-96 hover:bg-green-50 md:-mt-40 hover:cursor-pointer sm:mb-56 sm:-ml-0 rounded border-green-300 mt-10 row-start-3 row-end-2 row-span-2 lg:-mt-36 h-48">
            <HiOutlineLightBulb className="mx-auto"/>
            <p className="font-Martel text-green-500 text-2xl font-bold">Community Value</p>
            <p className="font-Perpetua">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates cumque nemo vitae. Autem, molestiae quisquam?</p>
          </div>
          <div className="p-6 lg:w-96 md:w-64 -mt-52 border md:mt-10 hover:bg-green-50 hover:cursor-pointer rounded border-green-300 row-start-3 row-end-1 h-48 lg:mt-10">
            <HiOutlineLightBulb className="mx-auto"/>
            <p className="font-Martel text-green-500 text-2xl font-bold">Community Value</p>
            <p className="font-Perpetua">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates cumque nemo vitae. Autem, molestiae quisquam?</p>
          </div>
        </div>

        <div className="my-20 -mx-10 py-32 lg:px-60 sm:px-10 bg-emerald-50 md:mt-2 sm:mt-96">
          <div className="text-center">
            <p className="font-Martel text-3xl font-bold">Join the BUA Community</p>
            <p className="font-Perpetua">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius recusandae oloremque magnam, odit a facere, et iure dolor voluptates fugit hic laboriosam obcaecati cumque doloremque magnam, odit a facere, et iure ullam delectus neque quaerat id iusto.</p>
            <p className="mt-10 text-lg w-64 mx-auto rounded text-white font-Perpetua pt-1 text-center bg-green-600 h-10"><a href="#">Join now</a></p>
          </div>
        </div>

        <div className="text-center">
          <p className="font-Martel text-3xl font-bold">Community Media</p><br/>
          <p className="font-Perpetua lg:w-6/12 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatum voluptates non libero deserunt quia necessitatibus at quasi praesentium nostrum? Ullam labore illo est, dolor nisi corrupti accusantium sint possimus.</p>
        </div>
        <div className="md:grid grid-cols-2 gap-3 my-10">
          <div>
            <p className="font-Consolas text-white text-xl sm:mt-0 md:absolute lg:mt-9 lg:ml-24 sm:pt-40 sm:pl-32 absolute sm:text-lg text-center font-bold">Community Photos</p><br/>
              <span className="text-white ml-60 sm:ml-24 absolute sm:mt-44 lg:mt-52 lg:ml-48 rounded py-1 px-7 bg-green-600 h-10 sm:h-9"><a href="#">View Community Photos</a></span>
            <Image className="-z-10 md:-mt-6 sm:pb-10" src={image} alt="community_image2" width={650} height={400}/>
            
          </div>
          <div>
            <Image className="ml-20 sm:ml-0 " src={image} alt="community_image2" width={650} height={400}/>
            <p className="font-Consolas text-white lg:-mt-60 lg:-ml-32 text-xl sm:text-lg text-center font-bold sm:-mt-32">Community Videos</p><br/>
            <span className="text-white lg:ml-48 rounded py-2 px-7 sm:ml-24 bg-green-600 h-10"><a href="#">View Community Videos</a></span>
          </div>
        </div>

         
          <div className="mt-40 md:mt-20 py-20 -mx-10 text-center px-60 sm:px-10 bg-blue-900">
            <div className="">
              <p className="font-Martel text-white text-3xl font-bold">Need more information about<br/> the community?</p>
              <p className="font-Perpetua w-9/12 mx-auto text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius recusandae dolor voluptates fugit hic laboriosam obcaecati cumque doloremque magnam, odit a facere, et iure ullam delectus neque quaerat id iusto.</p><br/><br/>
              <span className="font-Perpetua px-20 py-2 text-white border rounded"><a href="#">Read Our Frequently Asked Questions</a></span> 
            </div>
          </div>
        
      </main>

      <Newsletter />
    </>
  
  )

}

export default community;