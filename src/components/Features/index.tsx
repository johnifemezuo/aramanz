import SectionTitle from "../Common/SectionTitle";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Once upon a time, you dreamt of starting your own business."
            paragraph="You envisioned the freedom and flexibility of being your own boss, pursuing your passions, and doing something truly meaningful to you. But the traditional path felt rigid and limiting. Trapped in a job that didn't spark joy, you longed for a way to turn your dream into reality."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {/* {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))} */}
            <div className="wow fadeInUp" data-wow-delay=".15s">
              <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                The internet opened doors to a new world of possibilities.
              </h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                Suddenly, the ability to build and launch an online business
                became more accessible than ever. However, the vastness of
                information and the ever-changing landscape of online business
                strategies could be overwhelming.
              </p>
            </div>

            <div className="wow fadeInUp" data-wow-delay=".15s">
              <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              You found yourself lost in a maze of conflicting advice, unproven tactics, and short-term "hacks."
              </h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
              Navigating the world of online business felt like piecing together a puzzle with missing pieces. You yearned for a clear roadmap, a comprehensive system that would guide you from the initial spark of an idea to building a thriving online empire.
              </p>
            </div>

            <div className="wow fadeInUp" data-wow-delay=".15s">
              <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              That&apos;s where the Online Business OS comes in.
              </h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                It&apos;s your strategic manual for starting and growing a successful online business. This program will lay a solid foundation with a proven system, guiding you from idea to realization and transforming your dream into a thriving reality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
