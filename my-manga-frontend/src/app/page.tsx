// src/app/page.js
import Link from 'next/link';
import TestComponent from './components/TestComponent';
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

      <section className="mb-10">
        <h2 className="text-2xl font-semibold">Popular Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Render MangaCard components for popular mangas */}
        </div>
        <div className="mt-4 text-center">
          <Link href="/manga" className="text-blue-500">
            See More &raquo;
          </Link>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Newly Added</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Render MangaCard components for newly added mangas */}
        </div>
        <div className="mt-4 text-center">
          <Link href="/manga" className="text-blue-500">
            See More &raquo;
          </Link>
        </div>
      </section>
    </main>
  );
}
