// src/app/page.js
import Link from 'next/link';
import TestComponent from './components/TestComponent';
import PopularNow from './components/PopularNow';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import Image from 'next/image';

export default function Home() {
  return (
    <main className="p-6 bg-background-dark-green min-h-screen">
      {/* Hero section with new Figma design */}
      <section className="flex flex-col items-center gap-5 max-w-[1208px] mx-auto">
        {/* Header with logo and title */}
        <header className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-[1.76px]">
            <div className="flex items-center gap-[21.09px]">
              <img
                className="w-[47.45px] h-[54.81px]"
                alt="Collection Logo"
                src="/logo.svg"
              />
              <h1 className="!font-medium !text-content-reversed text-[56.2px] tracking-[-0.56px] leading-[70.3px] whitespace-nowrap !font-figtree">
                Collection
              </h1>
            </div>
          </div>
        </header>

        {/* Search card */}
        <Card className="w-full bg-content-alpha-20 rounded-2xl border-[0.84px] border-solid border-button-tetriary-reversed-normal">
          <CardContent className="p-4">
            <div className="flex flex-col gap-10">
              {/* Search input */}
              <div className="flex items-center gap-[6.73px] pl-1 pr-3 py-0">
                <Input 
                  className="font-title-400 !text-content-reversed bg-transparent border-0 focus:outline-none focus:ring-0 placeholder:text-content-alpha-80 w-full text-[20px] leading-[24px] tracking-[-0.2px]"
                  placeholder="Search by title, tags, characters, or describe a scene you're thinking of"
                  style={{ color: 'white' }}
                />
              </div>

              {/* Action buttons row */}
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3.5">
                  {/* Attachment button */}
                  <Button
                    className="w-[49px] h-[49px] p-2 bg-content-alpha-20 rounded-full border-[0.84px] border-solid border-button-tetriary-reversed-normal flex items-center justify-center"
                  >
                    <img
                      src="/paperclip.svg"
                      alt="Attachment"
                      className="w-[38px] h-[38px] object-contain"
                    />
                  </Button>

                  {/* Research button */}
                  <Button
                    className="h-[49px] pl-[9px] pr-[18px] py-5 bg-content-alpha-20 rounded-full border-[0.84px] border-solid border-button-tetriary-reversed-normal flex items-center"
                  >
                    <img
                      src="/globe-simple.svg"
                      alt="Research"
                      className="w-[30px] h-[30px] object-contain"
                    />
                    <span className="font-title-400 text-content-reversed text-[20px] leading-[24px] tracking-[-0.2px] ml-2">Research</span>
                  </Button>

                  {/* Deep Think button */}
                  <Button
                    className="h-[49px] pl-[9px] pr-[18px] py-5 bg-content-alpha-20 rounded-full border-[0.84px] border-solid border-button-tetriary-reversed-normal flex items-center"
                  >
                    <img
                      src="/lightbulb-filament.svg"
                      alt="Deep Think"
                      className="w-[30px] h-[30px] object-contain"
                    />
                    <span className="font-title-400 text-content-reversed text-[20px] leading-[24px] tracking-[-0.2px] ml-2">Deep Think</span>
                  </Button>
                </div>

                {/* Submit button */}
                <Button className="w-[47px] h-[47px] p-2 bg-button-tetriary-reversed-normal rounded-full flex items-center justify-center">
                  <img
                    src="/arrow-up.svg"
                    alt="Submit"
                    className="w-[38px] h-[38px] object-contain"
                  />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Categories section */}
      <section className="max-w-[1208px] mx-auto mb-10 mt-5">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {["Vanilla", "Harem", "Mind Control", "Tentacles", "Teacher", "Elf", "Cosplay", "Group", "Schoolgirl"].map((category) => (
            <div
              key={category}
              className="h-[30px] px-4 py-1.5 rounded-full border border-solid border-button-tetriary-reversed-normal cursor-pointer hover:bg-button-tetriary-reversed-hover transition-colors flex items-center"
            >
              <span className="font-title-400 text-content-reversed text-[15.2px] tracking-[-0.15px] leading-[18.2px]">
                {category}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Most Viewed This Week section */}
      <section className="max-w-[1208px] mx-auto mb-10">
        <div className="flex flex-col w-full items-center gap-[21px]">
          <header className="flex items-center justify-center w-full bg-transparent">
            <div className="inline-flex items-center gap-[5.8px]">
              <img
                src="/fire.svg"
                alt="Flame"
                className="w-[24px] h-[24px] text-content-reversed"
              />
              <h2 className="!font-medium !text-content-reversed text-[20px] tracking-[-0.2px] leading-[24px] whitespace-nowrap !font-figtree">
                Popular Now
              </h2>
            </div>
          </header>

          {/* Dynamic popular manga list */}
          <PopularNow limit={6} />
        </div>
      </section>

      {/* New Uploads section with five rows */}
      <section className="max-w-[1208px] mx-auto mb-10">
        <div className="flex flex-col w-full items-center gap-[21px]">
          <header className="flex items-center justify-center w-full bg-transparent">
            <div className="inline-flex items-center gap-[5.8px]">
              <img
                src="/box-arrow-up.svg"
                alt="New Uploads"
                className="w-[24px] h-[24px] text-content-reversed"
              />
              <h2 className="!font-medium !text-content-reversed text-[20px] tracking-[-0.2px] leading-[24px] whitespace-nowrap !font-figtree">
                New Uploads
              </h2>
            </div>
          </header>

          <div className="grid grid-cols-1 gap-4 w-full">
            {[1, 2, 3, 4, 5].map((row) => (
              <div key={row} className="flex items-center justify-between w-full">
                {[1, 2, 3, 4, 5, 6].map((card) => (
                  <div
                    key={card}
                    className="w-[196.62px] bg-content-alpha-20 rounded border-[0.84px] border-solid border-content-reversed p-0"
                  >
                    <div className="flex flex-col items-center gap-[4.07px] p-0">
                      <div className="w-full h-[284.96px] bg-[#c6c6c6] rounded-[4.22px]" />

                      <div className="flex items-start w-full px-0.5 py-0">
                        <img
                          src="/united-kingdom.svg"
                          alt="English"
                          className="h-[13.72px] w-auto flex-shrink-0 mt-0"
                        />
                        <div className="font-label-300 !text-content-reversed text-[12.7px] text-center tracking-[0] leading-[16.9px] flex-1 pl-1">
                          People I know Turned into a NIKKE!3
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination section */}
      <section className="max-w-[1208px] mx-auto mt-10">
        <div className="flex items-center justify-center gap-4">
          {/* Pagination numbers */}
          <div className="inline-flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((number, index) => (
              <button
                key={index}
                className={`flex w-[37.31px] h-[37.31px] items-center justify-center rounded-[130.35px] overflow-hidden ${
                  number === 1
                    ? "bg-content-alpha-20 border-[0.64px] border-solid border-button-tetriary-reversed-normal"
                    : ""
                }`}
              >
                <span className="!font-medium !text-content-reversed text-[15.2px] tracking-[-0.15px] leading-[18.2px]">
                  {number}
                </span>
              </button>
            ))}
          </div>

          {/* Navigation controls */}
          <div className="inline-flex items-center gap-[13px]">
            <button className="p-0">
              <img
                src="/caret-right.svg"
                alt="Next page"
                className="w-7 h-7 text-content-reversed"
              />
            </button>
            <button className="p-0">
              <img
                src="/caret-double-right.svg"
                alt="Last page"
                className="w-7 h-7 text-content-reversed"
              />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
