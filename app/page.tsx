"use client";

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import helpSection from "./lib/helpSections.json";
import allDocuemnts from "./lib/allDocuments.json";
import Image from "next/image";
type HelpSection = {
  icon: React.ReactNode;
  title: string;
  link: string;
  description: string;
};
type AllDocuments = {
  question: string;
  answer: string;
  link: string;
};
export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [popupImage, setPopupImage] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<
    { question: string; answer: string; link: string }[]
  >([]);

  const helpSections: HelpSection[] = helpSection;

  const AllDocuments: AllDocuments[] = allDocuemnts;

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = AllDocuments.filter(
        (section) =>
          section.question.toLowerCase().includes(query.toLowerCase()) ||
          section.answer.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results); // No type error now
    } else {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    const handleImageClick = (event: Event) => {
      const target = event.target as HTMLImageElement;
      if (target.classList.contains("image-popup")) {
        setPopupImage(target.src);
      }
    };

    // Attach click listener to the document
    document.addEventListener("click", handleImageClick);

    return () => {
      document.removeEventListener("click", handleImageClick);
    };
  }, []);

  const closePopup = () => setPopupImage(null);

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#001d4e] to-[#010000] px-4 py-8 sm:px-12 md:px-12 lg:px-12 xl:px-12 2xl:px-12 sm:py-10 md:py-10 h-[250px] sm:h-[220px] md:h[350px] lg:h[350px] xl:h[350px] ">
        <div className="mx-auto ">
          <h1 className=" text-2xl font-semibold text-white sm:text-[24px] xl:max-2xl:text-[24px]">
            Help Center
          </h1>
          <p className="text-sm mt-3 sm:mt-0 xl:max-2xl:mt-0 mb-12 sm:mb-0 xl:max-2xl:mb-0 text-gray-300/85 sm:text-[16px] xl:max-2xl:text-[16px] xl:max-2xl:leading-5 leading-5 tracking-wide py-3">
            Welcome to our Help Center, your go-to resource for guidance and
            support on our platform.
          </p>

          {/* Search Input */}
          <div className="relative max-w-full sm:max-w-sm md:max-lg:max-w-full lg:max-xl:max-w-full xl:max-2xl:max-w-sm">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full font-normal rounded-md focus:outline-none  bg-white py-2 pl-10 pr-4 text-gray-900 placeholder:text-gray-400/80 sm:py-2 sm:pl-16  text-sm sm:text-sm lg:text-[16px] xl:text-[16px] xl:max-2xl:text-[16px] xl:max-2xl:py-2 xl:max-2xl:pl-16 tracking-wide"
            />
            <CiSearch className="absolute left-3 top-1/2  -translate-y-1/2 text-gray-400 sm:left-5 h-5 w-5 sm:h-7 sm:w-7 xl:max-2xl:w-7 xl:max-2xl:h-7" />
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
                <div
                  key={index}
                  className="overflow-hidden rounded-lg bg-[#ffffff]"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="group flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-gray-200"
                  >
                    <span className="text-gray-900 tracking-wide text-md sm:text-2xl md:text-lg lg:text-lg xl:text-lg xl:max-2xl:text-lg">
                      {result.question}
                    </span>
                    <MdArrowForwardIos
                      className={`h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6  lg:h-6 lg:w-6 xl:max-2xl:h-6 xl:max-2xl:w-6 text-black  transition-transform duration-200 ease-in-out group-hover:translate-x-1 ${
                        openIndex === index ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {/* Answer Panel */}
                  <div
                    className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                      openIndex === index
                        ? "max-h-full opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div
                      dangerouslySetInnerHTML={{ __html: result.answer }}
                      className="border-t border-gray-200 bg-gray-50 p-4 text-gray-900 tracking-wide text-md sm:text-2xl md:text-lg lg:text-lg xl:text-lg xl:max-2xl:text-lg"
                    ></div>
                  </div>
                </div>
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
                  className="inline-flex items-center text-xl xl:max-2xl:text-[16px] sm:text-xl lg:text-lg xl:text-[16px]  font-medium text-black/90 hover:text-gray-900 hover:underline"
                >
                  Learn more
                  <span className="ml-1">
                    <Image
                      src="/images/arrow-right.png"
                      alt="arrow"
                      height="40"
                      width="40"
                      className="h-5 w-5 xl:max-2xl:h-5 xl:max-2xl:w-5"
                    />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {popupImage &&
        ReactDOM.createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            onClick={closePopup}
          >
            <img
              src={popupImage}
              alt="Popup"
              className="w-[100%] sm:w-[70%] md:w-[100%] lg:w-[100%] xl:w-[70%] xl:max-2xl:w-[70%]   rounded-md"
            />
          </div>,
          document.body
        )}
    </div>
  );
}
