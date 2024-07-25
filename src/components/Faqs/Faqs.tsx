
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import { Faq } from "./Faq";
import { faqData } from "./faqData";

export const Faqs = () => {
  return (
    <div className="lg:py-34 bg-[#faf8f6] py-12 dark:bg-blue-900/30">
      <div className="container space-y-5 ">
        <SectionTitle title="Frequently Asked Questions" center />

        <div className="mx-auto mb-9 grid  max-w-[1000px] gap-7 ">
          {
            faqData.map(({question, answer, id}) => (
              <Faq question={question} answer={answer} key={id}/>
            ))
          }
        </div>
      </div>
    </div>
  );
};
