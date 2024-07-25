"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Invest One Time, Reap Lifetime Benefits"
          paragraph="Select Your Bundle"
          center
          width="665px"
        />

        {/* <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div> */}

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="STARTUP"
            price="97"
            duration={""}
            subtitle="2 hours of high-value actionable program."
          >
            <OfferList text="Module 1: Customer-First" status="active" />
            <OfferList text="Module 2: Your Founder Context" status="active" />
            <OfferList
              text="Module 3: Discover Profitable Ideas"
              status="active"
            />
            <OfferList text="Module 4: Fast-Track Validation" status="active" />
            <OfferList
              text="Module 5: The Art of Pricing
"
              status="inactive"
            />
            <div className="bg-blue-800/20  p-3 ">
            Bonus 1: The Business Idea Scorecard 
            </div>
          </PricingBox>

          <div>
          <div className=" bg-yellow lg:text-3xl font-semibold top-0 text-black py-4 w-full text-center">Best Value</div>

          <PricingBox
            packageName="Growth"
            price="147"
            duration=""
            subtitle="3,5 hours of high-value actionable program."
          >
            <OfferList text="Module 1: Customer-First" status="active" />
            <OfferList text="Module 2: Your Founder Context" status="active" />
            <OfferList text="Module 3: Discover Profitable Ideas" status="active" />
            <OfferList text="Module 4: Fast-Track Validation" status="active" />
            <OfferList text="Module 5: The Art of Pricing" status="active" />
            <OfferList text="Module 6: Sales Mastery - Coming soon" status="inactive" />
            <OfferList text="Module 7: Scale Your Business - Coming soon" status="active" />

            <div className="bg-blue-800/20  p-3 ">
            Bonus 1: The Business Idea Scorecard <br/>
              Bonus 2: The Easiest Business Plan Ever <br/>
              Bonus 3: Revealed Upon Purchase - Coming soon 
            </div>
          </PricingBox>
          </div>


          <PricingBox
            packageName="Plus"
            price="897"
            duration=""
            subtitle="Limited Seats Available"
          >
            <OfferList text="2 hours of One-on-One Call" status="active" />
            <OfferList text="Full Course Access" status="active" />
            <OfferList text="All Bonus Materials" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
