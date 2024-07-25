import Image from "next/image";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="w-full mb-5">
                <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                  Building a business without a system can be overwhelming
                </h2>
                <p className="text-base !leading-relaxed dark:text-zinc-400 text-zinc-700 md:text-lg">
                  Right now, you might be thinking:<br/>
                  <span className="italic dark:text-green-500 text-green-700">
                  &quot;But can I start a business with a full-time job?&quot; &quot;I can&apos;t
                    come up with a good business idea.” &quot;What if my business
                    won&apos;t actually make money?” &quot;How do I know if I&apos;m on the
                    right track?” &quot;But where am I gonna find customers?” &quot;Is it
                    really possible to succeed online in the long term?&quot;
                  </span>
                </p>
              </div>

              <div className="border-t py-4 ">
                <p className="pt-3 dark:text-zinc-300 text-zinc-700 lg:text-lg">
                  You&apos;re not alone. I’ve heard all of these questions from
                  entrepreneurs before… I’ve even asked them myself. And while
                  you might have been &quot;duct&quot;taping&quot; things together so far,
                 <b> it&apos;s time to streamline your efforts and build a solid
                  foundation for success.</b>
                </p>
              </div>

              <div className="dark:bg-zinc-700/60 bg-zinc-200 mt-6 lg:mt-12 p-3 rounded-md">
                <h4 className="font-bold lg:text-lg">&quot;You don&apos;t rise to the level of your goals, you fall to the level of your systems.&quot;</h4>
                <p className="dark:text-zinc-300 text-zinc-700 mt-2">- James Clear, Author of &quot;Atomic Habits&quot;</p>
              </div>

              {/* <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Premium quality" />
                    <List text="Tailwind CSS" />
                    <List text="Use for lifetime" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Next.js" />
                    <List text="Rich documentation" />
                    <List text="Developer friendly" />
                  </div>
                </div>
              </div> */}
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
