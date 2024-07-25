import Image from "next/image"
import SectionTitle from "../Common/SectionTitle"

export const AuthorSection = () => {
  return (
    <div className="mx-auto grid max-w-[700px] gap-5 py-16 lg:py-20 lg:gap-9">
    <Image
      alt="aramanz"
      src="/images/author.webp"
      width={700}
      height={500}
      className="mx-auto h-[250px] md:h-[300px] w-[250px] md:w-[300px] rounded-full"
    />

    <p className="lg:text-lg text-zinc-700 dark:text-zinc-300 font-light px-4 md:px-0">
      Hi, I’m Ara Manz, an entrepreneur and a blessed father of three
      amazing boys. After nearly a decade in corporate IT management, I felt
      like I was just going through the motions. Everything changed in 2018
      when I decided to pursue financial freedom and build something I truly
      care about. With experience across seven industries and successful
      businesses from construction to digital marketing and e-commerce, I&apos;m
      passionate about helping everyday people like you. I teach <b className="font-bold text-white">the
      action-by-action</b> system you need to <b className="font-bold text-white">build a successful online
      business.</b> In this program, I remove the guesswork from your path,
      equipping you with an actionable system to start and grow a profitable
      online business. From idea research and validation to crafting offers
      and pricing, from first sales to scaling your business&apos;I&apos;ve got you
      covered. The result? You get to pursue your passion, building the
      business you&apos;ve always dreamed of.
    </p>
  </div>

  )
}