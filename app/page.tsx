"use client";

import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
type HelpSection = {
  icon: React.ReactNode;
  title: string;
  link: string;
  description: string;
};

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const helpSections: HelpSection[] = [
    {
      icon: "/images/discover.png",
      link: "aboutclient",
      title: "About Client List",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve.",
    },
    {
      icon: "/images/monitor-mobbile.png",
      link: "/aboutreport",
      title: "About Reports",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve.",
    },
    {
      icon: "/images/dollar-circle.png",
      link: "/aboutagent",
      title: "About Agents Management",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve.",
    },
    {
      icon: "/images/info-circle.png",
      link: "aboutclient",
      title: "About Pam User",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve.",
    },
    {
      icon: "/images/lock.png",
      link: "aboutclient",
      title: "About Site Configuration",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve.",
    },
    {
      icon: "/images/key.png",
      link: "aboutclient",
      title: "About Partner Configuration",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve.",
    },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = helpSections
        .filter((section) =>
          section.description.toLowerCase().includes(query.toLowerCase())
        )
        .map((section) => section.description);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#001d4e] to-[#010000] px-4 py-8 sm:px-12 md:px-12 lg:px-12 xl:px-12 2xl:px-12 sm:py-10 md:py-10 h-[300px] sm:h-[220px] md:h[350px] lg:h[350px] xl:h[350px] ">
        <div className="mx-auto ">
          <h1 className=" text-2xl font-semibold text-white sm:text-[24px] xl:max-2xl:text-[24px]">
            Help Center
          </h1>
          <p className="text-sm text-gray-300/85 sm:text-[16px] xl:max-2xl:text-[16px] leading-8 tracking-wide py-3">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          {/* Search Input */}
          <div className="relative max-w-full sm:max-w-sm md:max-lg:max-w-full lg:max-xl:max-w-full xl:max-2xl:max-w-sm">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full font-normal rounded-md focus:outline-none  bg-white py-2 pl-10 pr-4 text-gray-900 placeholder:text-gray-400/80 sm:py-2 sm:pl-16  text-sm sm:text-sm lg:text-xl xl:text-xl xl:max-2xl:text-xl xl:max-2xl:py-2 xl:max-2xl:pl-16 tracking-wide"
            />
            <CiSearch className="absolute left-3 top-1/2  -translate-y-1/2 text-gray-400 sm:left-5 h-5 w-5 sm:h-8 sm:w-8 xl:max-2xl:w-8 xl:max-2xl:h-8" />
          </div>
        </div>
      </div>

      <div className="mx-auto py-8 sm:py-8">
        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="mb-8">
            <h2 className="mb-8 text-xl sm:text-2xl font-semibold text-[#011e50] px-2 xl:max-2xl:text-xl">
              Search Results: {searchResults.length} Results
            </h2>
            <div className="space-y-4 px-2">
              {searchResults.map((result, index) => (
                <Link
                  key={index}
                  href={`/question/${index}`} // Dynamic route using index
                  className="group flex w-full items-center justify-between rounded-lg bg-[#ffffff] py-5 px-5 text-left transition-colors hover:bg-gray-200"
                >
                  <span className="text-gray-900 tracking-wide text-xl sm:text-md xl:max-2xl:text-xl">
                    {result}
                  </span>
                  <MdArrowForwardIos className="h-28 w-28 sm:h-6 sm:w-6 md:h-6 md:w-6  lg:h-6 lg:w-6 xl:max-2xl:h-6 xl:max-2xl:w-6 text-black transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Help Sections */}
        <div>
          <h2 className="mb-8 text-xl sm:text-2xl  font-semibold text-[#011e50] px-2 xl:max-2xl:text-2xl">
            Explore our Help Sections
          </h2>
          <div className="grid gap-4  md:max-lg:grid-cols-2 lg:max-xl:grid-cols-2 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 px-2 xl:max-2xl:gap-3">
            {helpSections.map((section, index) => (
              <div
                key={index}
                className="rounded-sm  bg-[#ffffff] text-center sm:text-start lg:text-start xl:text-start p-4 sm:p-6 xl:max-2xl:p-4"
              >
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#f0f0f0] hover:bg-[#011e50] transition-opacity sm:h-12 sm:w-12 xl:max-2xl:h-12 xl:max-2xl:w-12">
                  <Image
                    src={`${section.icon}`}
                    alt="discover"
                    width="1200"
                    height="800"
                    className="h-10 w-10 xl:max-2xl:h-6 xl:max-2xl:w-6 text-red-600 sm:h-6 sm:w-6"
                  />
                </div>
                <h2 className="mb-2 text-lg font-semibold text-black/90 sm:mb-3 sm:text-md xl:max-2xl:text-lg">
                  {section.title}
                </h2>
                <p className="mb-4 text-sm text-gray-500/80 leading-5  xl:max-2xl:leading-5 sm:text-md xl:max-2xl:text-md">
                  {section.description}
                </p>
                <Link
                  href={`${section.link}`}
                  className="inline-flex items-center text-xl xl:max-2xl:text-lg sm:text-xl lg:text-lg xl:text-md  font-medium text-black/90 hover:text-gray-900 hover:underline"
                >
                  Learn more
                  <span className="ml-2">
                    <Image
                      src="/images/arrow-right.png"
                      alt="arrow"
                      height="40"
                      width="40"
                      className="h-6 w-6 xl:max-2xl:h-6 xl:max-2xl:w-6"
                    />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
