"use client";

import { CiSearch } from "react-icons/ci";

import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
interface SearchResult {
  question: string;
  answer: string;
}

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [popupImage, setPopupImage] = useState<string | null>(null);

  const results: SearchResult[] = [
    {
      question: "How to export reports",
      answer: `
        
        <ul>
  <li>1. Run the report needed</li>
  <li>2. Click right on any section of the dashboard</li>
  <li>3. Click 'Export'</li>
  <li>4. Save your report</li>
</ul>

        <img src="/images/download41.png" alt="Date Filtering Example" class="w-full image-popup  xl:max-2xl:w-[50%] sm:w-[50%] h-full rounded-md mt-4"/>
        <img src="/images/download42.png" alt="Date Filtering Example" class="w-full image-popup xl:max-2xl:w-[50%] sm:w-[50%] h-full rounded-md mt-4"/>
         
      `,
    },
    {
      question: "How to share a report",
      answer: `
        <ol>
  <li>1. Click Report Settings and select the items needed to customize your report.</li>
  <li>2. Once all items are selected (or unselected) as needed, click 'apply'.</li>
  <li>3. Click 'save' (disk logo):<br/> In this section you can create your own report name.</li>
  <li>4. Click 'Save new report'.</li>
  <li>5. Click the Report Options (three dots).</li>
  <li>6. Besides downloading your new template, you can also share your template via Link.</li>
</ol>

        <img src="/images/download43.png" alt="Date Filtering Example" class="w-full image-popup xl:max-2xl:w-[50%] sm:w-[50%] h-full rounded-md mt-4"/>
        <img src="/images/download44.png" alt="Date Filtering Example" class="w-full image-popup xl:max-2xl:w-[50%] sm:w-[50%] h-full rounded-md mt-4"/>
        <img src="/images/download45.png" alt="Date Filtering Example" class="w-full image-popup xl:max-2xl:w-[50%] sm:w-[50%] h-full rounded-md mt-4"/>
  
         
      `,
    },
  ];

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
      <div className="bg-gradient-to-r from-[#001d4e] to-[#010000] px-4 py-8 sm:px-12 md:px-12 lg:px-12 xl:px-12 2xl:px-12 sm:py-10 md:py-10 h-[300px] sm:h-[220px] md:h[220px] lg:h[220px] xl:h[220px]  md:max-lg:h-[350px] lg:max-xl:h-[350px] xl:max-2xl:h-[220px]">
        <div className="mx-auto">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center text-sm sm:text-md md:text-md lg:text-md xl:text-md  text-white hover:text-gray-300 md:max-lg:text-2xl lg:max-xl:text-xl xl:max-2xl:text-md"
          >
            <MdArrowBackIosNew className="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5 lg:h-5 lg:w-5 xl:h-5 xl:w-5 md:max-lg:h-7 lg:max-xl:h-7 xl:max-2xl:h-5 md:max-lg:w-7 lg:max-xl:w-5 xl:max-2xl:w-5 text-white" />
            Go Back
          </Link>
          {/* Min */}
          <div className="flex flex-col gap-4 md:max-lg:flex-col lg:max-xl:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row sm:items-center sm:justify-between sm:pt-5 md:max-lg:pt-16 lg:max-xl:pt-16 xl:max-2xl:pt-5">
            <div className="w-full">
              <h1 className=" text-2xl font-semibold text-white sm:text-[24px] xl:max-2xl:text-[24px]">
                About Site Configuration
              </h1>
              <p className="text-sm text-gray-300/85 sm:text-[16px] xl:max-2xl:text-[16px] xl:max-2xl:leading-5 leading-5 tracking-wide py-3">
                Find guidance on managing banners, editing static pages, and
                handling translations to customize your platform.
              </p>
            </div>
            <div className="relative w-full sm:max-w-sm sm:ml-auto md:max-lg:max-w-full lg:max-xl:max-w-full">
              <input
                type="text"
                placeholder="Search About Reports"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full font-normal rounded-md focus:outline-none  bg-white py-2 pl-10 pr-4 text-gray-900 placeholder:text-gray-400/80 sm:py-2 sm:pl-16  text-sm sm:text-sm lg:text-[16px] xl:text-[16px] xl:max-2xl:text-[16px] xl:max-2xl:py-2 xl:max-2xl:pl-16 tracking-wide"
              />
              <CiSearch className="absolute left-3 top-1/2  -translate-y-1/2 text-gray-400 sm:left-5 h-5 w-5 sm:h-7 sm:w-7 xl:max-2xl:w-7 xl:max-2xl:h-7" />
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="mx-auto py-8 sm:py-b">
        {/* <h2 className="mb-8 text-xl sm:text-2xl font-semibold text-[#011e50] px-2 xl:max-2xl:text-2xl">
          Search Results: 8 Results
        </h2> */}

        {/* Results List */}
        <div className="space-y-4 px-2">
          {results.map((result, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-[#ffffff]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
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
