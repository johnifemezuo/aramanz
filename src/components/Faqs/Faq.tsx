"use client";

import { useState } from "react";

export const Faq = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`relative w-full cursor-pointer space-y-3 rounded-md p-5 dark:bg-slate-900 bg-white lg:p-6 `}
    >
      <div className="flex items-center space-x-4 justify-between">
        <h2 className="max-w-[900px] font-semibold lg:text-xl xl:text-xl">
          {question}
        </h2>
        <div className=" grid p-2 place-content-center rounded-full bg-neutral-100">
          <svg
            className="h-6 w-6 text-neutral-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.2072 9.0428 12.0001 2.83569 5.79297 9.0428 7.20718 10.457 12.0001 5.66412 16.793 10.457 18.2072 9.0428ZM5.79282 14.9572 11.9999 21.1643 18.207 14.9572 16.7928 13.543 11.9999 18.3359 7.20703 13.543 5.79282 14.9572Z"></path>
          </svg>
        </div>
      </div>
      {isOpen ? (
        <p className="text-sm font-light text-zinc-700 dark:text-zinc-300 lg:text-lg">
          {answer}
        </p>
      ) : null}
    </div>
  );
};
