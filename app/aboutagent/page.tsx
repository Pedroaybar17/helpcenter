"use client";

import { CiSearch } from "react-icons/ci";

import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
interface SearchResult {
  question: string;
  answer: string;
}

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const results: SearchResult[] = [
    {
      question: "Settlement Agents",
      answer: `
        The Settlement Agent is the Agent responsible for the transactions of your Agency and the Parent Company
</br></br>
In the 'Settlement Agents' section, the user can view:<br/></br>
<ol>
  <li>1.Name: Name of Agent</li>
  <li>2.Limit Balance: It is the maximum allowed by agent to carry out transactions (sale of tickets, transfers)</li>
  <li>3.Balance: Amount that has been used from the Limit Balance or amount that has been accumulated for Ticket Withdrawal</li>
  <li>4.Settlement Agent: Yes or No: Agent Yes is configured as Settlement Agent or Agent No is configured as Settlement Agent.</li>
  <li>5.Actions: To make Deposits or Withdrawals</li>
</ol>

        <img src="/images/download46.png" alt="Date Filtering Example" class="w-full xl:max-2xl:w-[50%] sm:w-[50%] h-full rounded-md mt-4"/>
         
      `,
    },
    {
      question: "How to limit Agents",
      answer: `
        
        1. Enter 'Agent List'<br/><br/>
       <img src="/images/download47.png" alt="Date Filtering Example" class="w-full xl:max-2xl:w-[50%] sm:w-[50%] h-full rounded-md mt-4"/><br/>
        2. Select the Edit Agent icon<br/><br/>
         <img src="/images/download48.png" alt="Date Filtering Example" class="w-full xl:max-2xl:w-[50%] sm:w-[50%] h-full rounded-md mt-4"/><br/>
         3. In the 'Limit Balance' option, enter the amount by which you want to limit the Agent (Cutoff Balance) and Save.
         <br/><br/>
      
         <img src="/images/download49.png" alt="Date Filtering Example" class="w-full xl:max-2xl:w-[50%] sm:w-[50%] h-full rounded-md mt-4"/>
        
         
      `,
    },
    {
      question: "How to create a Transfer",
      answer: `
        
        1. Select the 'Create Transfer' option<br/><br/>
       <img src="/images/download53.png" alt="Date Filtering Example" class="w-full xl:max-2xl:w-[50%] sm:w-[50%] h-full rounded-md mt-4"/><br/>
        2. 'Issuing Agent'<br/><br/>
        The Issuing Agent is the Agent that generates the withdrawal<br/><br/>
        e.g. If Master must make a payment transaction to the Billares Agent, the Issuing Agent in this case would be Master<br/><br/>
         <img src="/images/download54.png" alt="Date Filtering Example" class="w-full xl:max-2xl:w-[50%] sm:w-[50%] h-full rounded-md mt-4"/><br/>
         3. 'Fate Agent' <br/><br/>
         The Destination Agent is the one who receives the transfer
  <br/><br/>
e.g. If the Billares Agent needs to pay Master, the Destination agent would be in this case 'Master'
         <br/><br/>
      
         <img src="/images/download55.png" alt="Date Filtering Example" class="w-full xl:max-2xl:w-[50%] sm:w-[50%] h-full rounded-md mt-4"/>
        
         
      `,
    },
    {
      question: "Settlement Agents",
      answer: `
        
        The Settlement Agent is the Agent responsible for the transactions of your Agency and the Parent Company<br/><br/>
        In the 'Settlement Agents' section, the user can view:</br></br>
      
       1. Name: Name of Agent</br></br>

2. Limit Balance: It is the maximum allowed by agent to carry out transactions (sale of tickets, transfers)</br></br>

3. Balance: Amount that has been used from the Limit Balance or amount that has been accumulated for Ticket Withdrawal</br></br>

4. Settlement Agent: Yes or No: Agent Yes is configured as Settlement Agent or Agent No is configured as Settlement Agent.</br></br>

5. Actions: To make Deposits or Withdrawals</br>
         <img src="/images/download51.png" alt="Date Filtering Example" class="w-full xl:max-2xl:w-[50%] sm:w-[50%] h-full rounded-md mt-4"/><br/>

      
         <img src="/images/download52.png" alt="Date Filtering Example" class="w-full xl:max-2xl:w-[50%] sm:w-[50%] h-full rounded-md mt-4"/>
        
         
      `,
    },
    {
      question: "Credit and Debit Concept",
      answer: `
        
      The concept of balance indicates the position of the agent with respect to the parent company. An agent with a negative balance owes the negative amount to the parent company, while an agent with a positive balance would expect to collect that amount from the parent company.<br/><br/>
      Let's see an example:</br></br>
    
     
       <img src="/images/download50.png" alt="Date Filtering Example" class="w-full xl:max-2xl:w-[50%] sm:w-[50%] h-full rounded-md mt-4"/><br/>

    
      An agent with:</br></br>
- Balance -S/5,000, you should transfer those S/5,000 to the parent company, in order to remain at S/0. Without debt.</br>
- Balance S/5,000 indicates that the agent is owed by the parent company S/5,000.</br>
- A balance with S/0 indicates that the agent does not owe and is not owed money.<br/></br>
      The limit balance is represented in negative, since it is the maximum amount that an agent can owe to the parent company
       
    `,
    },
  ];

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
                About Agent
              </h1>
              <p className="text-sm text-gray-300/85 sm:text-[16px] xl:max-2xl:text-[16px] xl:max-2xl:leading-5 leading-5 tracking-wide py-3">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry.
                <br /> Lorem ipsum has been the industry&apos;s standard dummy
                text eve.
              </p>
            </div>
            <div className="relative w-full sm:max-w-sm sm:ml-auto md:max-lg:max-w-full lg:max-xl:max-w-full">
              <input
                type="text"
                placeholder="Search About Reports"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full font-normal rounded-md focus:outline-none  bg-white py-2 pl-10 pr-4 text-gray-900 placeholder:text-gray-400/80 sm:py-2 sm:pl-16  text-sm sm:text-sm lg:text-xl xl:text-xl xl:max-2xl:text-xl xl:max-2xl:py-2 xl:max-2xl:pl-16 tracking-wide"
              />
              <CiSearch className="absolute left-3 top-1/2  -translate-y-1/2 text-gray-400 sm:left-5 h-5 w-5 sm:h-8 sm:w-8 xl:max-2xl:w-8 xl:max-2xl:h-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="mx-auto py-8 sm:py-b">
        <h2 className="mb-8 text-xl sm:text-2xl font-semibold text-[#011e50] px-2 xl:max-2xl:text-2xl">
          Search Results: 8 Results
        </h2>

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
    </div>
  );
}
