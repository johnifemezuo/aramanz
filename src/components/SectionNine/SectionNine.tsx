import Image from "next/image"
import SectionTitle from "../Common/SectionTitle"

export const SectionNine = () => {
  return (
    <div className="lg:lpy-34 bg-[#faf8f6] py-12 dark:bg-blue-900/30">
    <div className="container space-y-5 ">
      <SectionTitle title="THE 30 DAY SATISFACTION GUARANTEE" center />

      <div className="mx-auto mb-9 grid max-w-[1000px] gap-7 md:grid-cols-2">
        <Image
          alt="aramanz"
          src="/images/cert.webp"
          width={250}
          height={250}
          className="h-[250px] mx-auto  md:h-[300px] w-[250px] md:w-[300px] rounded-full"
        />

        <p className="text-zinc-700 dark:text-zinc-300 lg:text-lg">
          I offer a 100% Money Back Guarantee to give you full confidence in
          your decision to enroll today. If you’re on the fence or if other
          training programs have left you skeptical, I want to give you
          every opportunity to put Online Business OS to work and unlock the
          systems to build the business of your dreams. I’m so confident
          that when you implement what you’ll learn, you’ll set yourself on
          a fast track to success. If, after completing the course and
          applying the lessons, you feel that Online Business OS isn&apos;t
          helping you make progress, within 30 days of enrollment just let
          me know. I’ll give you every penny back. 🤝 You have nothing to
          lose, only to gain valuable knowledge and actionable strategies to
          turn your vision into reality.
        </p>
      </div>
    </div>
  </div>

  )
}