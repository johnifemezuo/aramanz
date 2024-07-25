import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import {
  AuthorSection,
} from "@/components/AuthorSection/AuthorSection";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionTitle from "@/components/Common/SectionTitle";
import { CompareTable } from "@/components/CompareTable/CompareTable";
import { Faqs } from "@/components/Faqs/Faqs";
import Features from "@/components/Features";
import { featuresDataTwo } from "@/components/Features/featuresData";
import SingleFeature from "@/components/Features/SingleFeature";
import { FullTestimonial } from "@/components/FullTestimonial/FullTestimonial";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { SectionEight } from "@/components/SectionEight/SectionEight";
import { SectionNine } from "@/components/SectionNine/SectionNine";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Online Business OS | Ara Manz",
  description: "",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <FullTestimonial
        description="This year, I decided it was time to stop talking and start doing.
          Take my design agency business to the next level. But then I hit
          the usual wall - staring at a blank screen, clueless about where
          to even begin. That's when I found the Online Business OS,
          and it was a game-changer. Value packed, easy to follow
          step-by-step guide, it gave me the roadmap I needed."
        author="Anna Shvets"
        image="/images/testimonial-1.webp"
      />
      {/* <Video /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      <FullTestimonial
        description="I'd been ghostwriting on the side for a couple of years—it was a good side hustle. But building a business around it? Never taken seriously! The Online Business OS totally changed my mind, it made me realize the opportunity I already had.
        Instead of chasing freelance gigs, I turned my skills into a sweet monthly copywriting service package. Ara's step-by-step system showed me how to attract the right clients and tailor my offers to their needs.
        Now, in just 3 months, I have my business growing with recurring revenue, working on my own terms. The Online Business OS delivers more than promised. A million thanks!"
        author="Anna Shvets"
        image="/images/testimonial-2.webp"
      />

      <CompareTable />

      <div className="lg:py-34 bg-zinc-100 py-12 dark:bg-[#1e232e] px-4 md:px-0">
        <p className="mx-auto max-w-[800px]  lg:text-2xl">
          You don’t need a business degree or years of experience to get
          started. If you’ve been spinning your wheels, trying to figure out
          what business to start and how to take it off the ground, I&apos;ve
          got you covered. Starting an online business can feel overwhelming,
          especially if you’re not sure where to begin. But without the right
          guidance, creating consistent revenue in your business will always be
          a struggle. If you’re 100% committed to taking control of your future
          and doing the work to see long-term growth in your business… I will
          equip you with an actionable system to start and grow a profitable
          online business.
        </p>

        <h1 className="mt-8 px-4 bg-blue-500/100 py-12 text-center text-xl capitalize text-white lg:text-2xl">
          Stop Dreaming, Start Building: Your Roadmap to a Thriving Online
          Business
        </h1>
      </div>

      <div id="whats" className="py-12 lg:py-20 px-4 md:px-0">
        <div className="container">
          <SectionTitle
            title="WHAT'S COVERED"
            paragraph="AN INVESTMENT FOR YOUR WHOLE LIFE"
            center
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-9">
            {featuresDataTwo.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </div>

      <div id="bonuses" className="py-12 lg:py-20">
        <div className="container space-y-5">
          <SectionTitle
            title="But Wait, There's More!I Have Bonuses for You!"
            center
          />

          <div className="mx-auto mb-9 grid max-w-[1000px] gap-7 md:grid-cols-2">
            <Image
              alt="aramanz"
              src="/images/bus1.webp"
              width={350}
              height={350}
              className="w-full"
            />

            <div className="space-y-3">
              <h2 className="text-lg lg:text-xl">
                THE BUSINESS IDEA SCORECARD
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 lg:text-lg">
                Your Visual Guide to Choosing the Best Business Idea. Here, you
                can organize and refine your business ideas with dedicated
                sections. A specially designed dashboard allows you to compare
                different business ideas side by side. Analyze competition,
                market trends, and how each idea fits with your founder context,
                all in one place. Easily compare business ideas with a visual
                scorecard. See at a glance which idea is the most promising
                based on a set of criteria.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-[1000px] gap-7 md:grid-cols-2">
            <div className="space-y-3">
              <h2 className="text-lg lg:text-xl">
                THE EASIEST BUSINESS PLAN EVER
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 lg:text-lg">
                Your Ready-to-Use Business Plan Template. No need to start from
                scratch! I&apos;ve prepared a comprehensive business plan
                document for you. Simply fill in the blanks, and you&apos;ll
                capture all the important details easily, without any hassle.
                Keep it in front of you as a mind map to stay focused on your
                vision.
              </p>
            </div>

            <Image
              alt="aramanz"
              src="/images/bus-2.webp"
              width={350}
              height={350}
              className="w-full"
            />
          </div>
        </div>
      </div>

      <SectionEight />

      <div className="container space-y-5 py-12 lg:py-20">
        <h1 className="mx-auto mb-12 max-w-[900px] space-x-3 text-center font-semibold lg:text-4xl">
          <b className="text-primary">That&apos;s a value of $1,500.</b>{" "}
          <span>
            But when you enroll today, you can access Online Business OS for
            just $147 during this{" "}
            <span className="underline">limited offer!</span>
          </span>
        </h1>

        <Image
          alt="aramanz"
          src="/images/bus3.webp"
          width={700}
          height={500}
          className="w-full"
        />
      </div>

      <Pricing />

      <SectionNine />
      <AuthorSection />

      <Testimonials />
      <Faqs />

    </>
  );
}
