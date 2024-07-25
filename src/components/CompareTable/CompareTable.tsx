import React from 'react'
import SectionTitle from '../Common/SectionTitle'

export const CompareTable = () => {
  return (
    <div className="py-12 md:py-20">
        <SectionTitle
          title="Who this course is for?"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="container grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="font-semibold lg:text-3xl">
              Who IS A Good Fit For Online Business OS?
            </h2>
            <div className="text-sm text-zinc-700 dark:text-zinc-300 md:text-lg">
              <p className="py-4 border px-3 border-zinc-300 dark:border-zinc-600">
                ✅ You want to start an online business but don&apos;t know
                where to begin.
              </p>
              <p className="py-4 border px-3 border-zinc-300 dark:border-zinc-600">
                ✅ You&apos;re open to refining your initial business ideas to find the perfect fit.
              </p>
              <p className="py-4 border px-3 border-zinc-300 dark:border-zinc-600">
                ✅ You&apos;re looking for a step-by-step system to guide you build and scale an online business.
              </p>
              <p className="py-4 border px-3 border-zinc-300 dark:border-zinc-600">
                ✅ You understand that, like anything worthwhile, building a successful online business requires consistency and patience.
              </p>
              <p className="py-4 border px-3 border-zinc-300 dark:border-zinc-600">
                ✅ You&apos;re committed to creating a sustainable online business that provides recurring revenue.
              </p>
              <p className="py-4 border px-3 border-zinc-300 dark:border-zinc-600">
                ✅ You want to spend more time with family and value freedom above anything else.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold lg:text-3xl">
            Who IS NOT A Good Fit For Online Business OS?
            </h2>
            <div className="text-sm text-zinc-700 dark:text-zinc-300 md:text-lg">
              <p className="py-4 border px-3 border-zinc-300 dark:border-zinc-600">
                ❌ You&apos;re in a rush and looking for overnight success.
              </p>
              <p className="py-4 border px-3 border-zinc-300 dark:border-zinc-600">
                ❌ You are not willing to do the unsexy work and put in the effort required to build a business.
              </p>
              <p className="py-4 border px-3 border-zinc-300 dark:border-zinc-600">
                ❌ You&apos;re not open to learning strategies for building an online business.
              </p>
              <p className="py-4 border px-3 border-zinc-300 dark:border-zinc-600">
                ❌ You already have a successful online business and are not seeking additional guidance or support.
              </p>
              <p className="py-4 border px-3 border-zinc-300 dark:border-zinc-600">
                ❌ You&apos;re not committed to following through with the course and implementing the given strategies.
              </p>
              <p className="py-4 border px-3 border-zinc-300 dark:border-zinc-600">
                ❌ You prefer promoting others&apos; products or services rather than building your own business.
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}
