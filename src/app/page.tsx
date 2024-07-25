import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionTitle from "@/components/Common/SectionTitle";
import { CompareTable } from "@/components/CompareTable/CompareTable";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import { FullTestimonial } from "@/components/FullTestimonial/FullTestimonial";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Business OS | Ara Manz",
  description: "This is Home for Startup Nextjs Template",
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
      <Video />
      <Brands />
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
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
