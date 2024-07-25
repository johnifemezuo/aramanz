import Image from 'next/image'
import React from 'react'

export const FullTestimonial = ({description, author, image}:{description?: string; author?: string; image?: string})=> {
  return (
    <div className="bg-primary py-9 lg:py-12 px-4 md:px-0">
    <div className=" max-w-[1000px] mx-auto items-center space-x-12 lg:flex ">
      <div>
        <p className="lg:text-xl text-white">
         {description}
        </p>
        <p className="mt-12 text-lg md:text-lg font-light text-right text-white">-{author}</p>
      </div>

      <Image
        alt="Aramanz testimonial"
        src={image}
        width={200}
        height={300}
        className="md:h-[300px] md:w-[300px] rounded-full object-cover  border-8"
      />
    </div>
  </div>
  )
}
