import React, { useState, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import Newsletter from "@/components/newsletter";
import community1 from "public/images/community1.jpg"
import image from "public/images/image.png"
import { HiOutlineLightBulb } from "react-icons/hi";


const community = () => {

  return(
    <>
      <Head>
				<title>Community | Build-Up Africa</title>
			</Head>

      <div className="text-white z-5 mt-64 ml-20 absolute">
        <h4 className="font-Consolas text-2xl">Connect, Learn, Grow.</h4>
        <h1 className="mt-10 text-7xl font-Martel">Vibrant Community Of <br/> Individuals</h1>
        <p className="mt-10 w-1/2 text-lg font-Perpetua">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem reiciendis animi consectetur modi fugiat recusandae ipsum, saepe voluptate inventore consequuntur magni eum officiis rem iste? Nobis ea natus dignissimos consequuntur.</p>
        <p className="mt-10 text-lg w-64 rounded pt-1 text-center bg-green-600 h-10"><a href="#">Join the community</a></p>
      </div>
      
      <Image className="" src={community1} alt="community_image" width={1600} height={500}/>
      <svg className="lg:-mt-60 sm:-mt-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      
      <main className="mx-10 -mt-20">
        <div className="grid grid-cols-2 grid-gap-0">
          <div>
            <p className="font-bold text-3xl font-Martel">About the Community</p>
            <p className="w-11/12 font-Perpetua text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia dolorum voluptates placeat perspiciatis odio. Odit cum explicabo architecto, sunt reprehenderit nostrum voluptatem id, incidunt cupiditate iusto facere, cumque sint hic architecto, sunt reprehenderit nostrum.</p><br/>
            <p className="w-11/12 font-Perpetua text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dicta iure suscipit quasi natus, culpa tenetur ratione sapiente nobis magni facilis deleniti ipsa harum cupiditate, distinctio voluptatibus eveniet vel minima eaque quo modi? Iusto cum laudantium culpa tenetur ratione sapiente nobis magni facilis deleniti ipsa harum cupiditate dignissimos voluptatibus dolorem culpa tenetur ratione sapiente nobis magni facilis deleniti ipsa harum cupiditate tempore consequatur velit ex fugiat magnam animi voluptates eveniet, facilis ipsam!</p>

          </div>
          <Image className="ml-20 w-11/12 h-72" src={image} alt="community_image2" width={600} height={400}/>
        </div>

        <div className="text-center mt-20">
          <div className="p-5 w-96 border rounded hover:bg-green-50 hover:cursor-pointer border-green-300">
            <HiOutlineLightBulb className="mx-auto"/>
            <p className="font-Martel text-green-500 text-2xl font-bold">Community Mission</p>
            <p className="font-Perpetua">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates cumque nemo vitae. Autem, molestiae quisquam?</p>
          </div>
          <div className="p-5 w-96 mx-auto -mt-20 border hover:bg-green-50 hover:cursor-pointer rounded border-green-300 mt-10">
            <HiOutlineLightBulb className="mx-auto"/>
            <p className="font-Martel text-green-500 text-2xl font-bold">Community Value</p>
            <p className="font-Perpetua">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates cumque nemo vitae. Autem, molestiae quisquam?</p>
          </div>
          <div className="p-5 w-96 float-right -mt-52 border hover:bg-green-50 hover:cursor-pointer rounded border-green-300">
            <HiOutlineLightBulb className="mx-auto"/>
            <p className="font-Martel text-green-500 text-2xl font-bold">Community Value</p>
            <p className="font-Perpetua">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates cumque nemo vitae. Autem, molestiae quisquam?</p>
          </div>
        </div>

        <div className="my-20 -mx-10 py-40 px-60 bg-emerald-50">
          <div className="text-center">
            <p className="font-Martel text-3xl font-bold">Join the BUA Community</p>
            <p className="font-Perpetua">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius recusandae oloremque magnam, odit a facere, et iure dolor voluptates fugit hic laboriosam obcaecati cumque doloremque magnam, odit a facere, et iure ullam delectus neque quaerat id iusto.</p>
            <p className="mt-10 text-lg w-64 mx-auto rounded text-white font-Perpetua pt-1 text-center bg-green-600 h-10"><a href="#">Join now</a></p>
          </div>
        </div>

        <div className="text-center">
          <p className="font-Martel text-3xl font-bold">Community Media</p><br/>
          <p className="font-Perpetua w-6/12 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatum voluptates non libero deserunt quia necessitatibus at quasi praesentium nostrum? Ullam labore illo est, dolor nisi corrupti accusantium sint possimus.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 my-10">
          <div>
            <Image className="-z-10" src={image} alt="community_image2" width={650} height={400}/>
            <p className="font-Consolas text-white -mt-40 text-xl text-center font-bold">Community Photos</p><br/>
            <span className="text-white ml-60 rounded py-2 px-7 bg-green-600 h-10"><a href="#">View Community Photos</a></span>
          </div>
          <div>
            <Image className="ml-20" src={image} alt="community_image2" width={650} height={400}/>
            <p className="font-Consolas text-white -mt-40 text-xl text-center font-bold">Community Videos</p><br/>
            <span className="text-white ml-60 rounded py-2 px-7 bg-green-600 h-10"><a href="#">View Community Videos</a></span>
          </div>
        </div>

         
          <div className="mt-40 py-20 -mx-10 text-center px-60 bg-blue-900">
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