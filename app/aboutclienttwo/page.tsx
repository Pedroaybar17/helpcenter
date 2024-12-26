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
      question: "Date filtering",
      answer: `
        
        <p>Date filtering is located in the top right of the dashboard <br/><br/>

By clicking on the default date shown, a date modal will pop-up, in which the user can select the date the report needs to be filtered by<br/><br/>

In the bottom of the calendars, the user can also select a time frame<br/><br/>

Once the filtering set up is complete, click 'Apply'</p>
        <img src="/images/download1.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/>
         
      `,
    },
    {
      question: "Pivot Mode",
      answer: `
        
        <p>Pivot Modes are located in all report dashboards. <br/><br/>
        In the right of the screen locate the option named 'Columns', and click on it:<br/>
        <img src="/images/download2.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/>
         <img src="/images/download3.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/>
       <span class="font-bold" >Pivot Mode Enable:</span><br/><br/>
        When enabled, the Pivot Mode will automatically group accordingly to the selection you clicked on. <br/><br/>
        For example, if activating Pivot Mode and clicking 'Users' in the Graded Wagers report, the report will automatically group by 'Users'.</p>
         <img src="/images/download4.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/>
        <span class="font-bold" > Pivot Mode Disable:</span><br/><br/>
        When the Pivot Mode is disabled, the report will run with the defaulted checked columns<br/>
         
      `,
    },
    {
      question: "Wagers Report",
      answer: `
        
      <p>The wagering reports section offers a wide range of filtering options, allowing users to customize the reports to meet their specific needs<br/><br/>
      The user can sort by: grade date, wager date, product, all wagers, graded wagers, online customers, etc.  and as you choose from the different options, the widgets will dynamically update to reflect the changes.

<br/><br/>
Generating a report for a specific product is simple: click the filtering option in the 'product' column and choose or remove the check from the relevant product (including in-play, prematch, casino and/or horses)

<br/>
      <img src="/images/download5.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/></br>
        Steps for product filtering:<br/><br/>
        <ul style="list-style-type: disc; padding-left: 50px;">
  <li>Select Wagers Report.</li>
  <li>Click Filters.</li>
  <li>Scroll down to Product Ids.</li>
  <li>Select the product.</li>
  <li>Click Search.</li>
</ul>

       <img src="/images/download6.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/>
       
    `,
    },
    {
      question: "Find Customer",
      answer: `
        
        <p>Tab where the user can search a search a customer by a combination of multiple alternatives, such:<br/><br/>
        Customer ID, Customer Name, Agent, Date of Birth, Affiliate ID, Nationality, etc<br/>
        <img src="/images/download7.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/> <br/>
    User can either use the default serach bars or filter by column:<br/><br/>
    <img src="/images/download8.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/>
    <img src="/images/download9.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/>
      `,
    },
    {
      question: "Emails List",
      answer: `<p>Tab where the user can locate emails of accounts whom have accepted to receive promotional emails when the account was created<br/><br/>
    <img src="/images/download10.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/>`,
    },
    {
      question: "Creating a Bonus: Cash Bonus",
      answer: `
        <span class="font-bold" >1. Select 'Bonuses' from the menu on the left side.</span><br/><br/>
        <img src="/images/download11.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/><br/>
         <span class="font-bold" >2. Choose the 'Create' tab from the menu in the upper right</span><br/><br/>
        <img src="/images/download12.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/><br/>
 <span class="font-bold" >3. Input the required data accordingly.</span><br/><br/>
<ul style="list-style-type: disc; padding-left: 20px;">
  <li>*Name: <br/>It denotes the internal name you'll assign to the bonus.</li>
  <li>*Agent: <br/>Is the Agent responsible for the group of customers who will receive the Bonus.</li>
  <li>*Type: <br/>Type of bonus, in this case 'cash bonus'.</li>
  <li>*Trigger:
    <ul style=" padding-left: 20px;">
      <li>-The available options to automatically trigger the Bonus include: Sign Up, Initial Deposit, and Re Up.</li>
      <li>-If the Bonus needs to be assigned manually, select the 'Discretionary' option.</li>
      <li>-Sign up has the capability to use as well a discretionary amount along the rollover rather than a percentage.</li>
    </ul>
  </li>
  <li>Start Date / End Date: Range of time the user wants the bonus to be applied.</li>
  <li>Once an automatic trigger is chosen, the 'Auto assign to' option will appear with the following choices:<br/>
    Online customers only, Retail customers only, All, None.

  </li>
  <li>*Maximum award: Maximum amount a customer can receive.</li>
  <li>Description: Blank space for the user to add notes.</li>
  <li>Start Date: Calendar and time selector for the user to choose from which date and time the Bonus should start.</li>
  <li>Expiration Date: Calendar and time selector for the user to choose from which date and time the Bonus should finish.</li>
  <li>*Rollover: Requirement to wager a certain amount of money before the client can withdraw any winnings from a bonus or promotion. This count towards all graded wagers with the exception of cancellations, and the base amount from which the rollover starts includes only the bonus amount given.</li>
  <li>Rollover partner product: Users can either pick certain products or include all products to meet the rollover requirement.</li>
  <li>Bonus assignment limit: The number of times the customer is eligible to receive the bonus.</li>
</ul>
<br/>

     
      
      <img src="/images/download13.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/>
       <img src="/images/download14.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/>
       <img src="/images/download15.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/>
     
    `,
    },
    {
      question: "Creating a Bonus: Free Bets",
      answer: `
      <span class="font-bold" >1. Select 'Bonuses' from the menu on the left side</span><br/><br/>
      <img src="/images/download16.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/><br/>
       <span class="font-bold" >2. Choose the 'Create' tab from the menu in the upper right</span><br/><br/>
      <img src="/images/download17.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/><br/>
<span class="font-bold" >3. Input the required data accordingly.</span><br/><br/>
<ul style="list-style-type: disc; padding-left: 20px;">
  <li>*Name:<br/>It denotes the internal name you'll assign to the bonus.</li>
  <li>*Agent:<br/>Is the Agent responsible for the group of customers who will receive the Bonus.</li>
  <li>*Type:<br/>Type of bonus, in this case 'Free bets'.</li>
  <li>*Trigger:<br/>
    <ul style=" padding-left: 20px;">
      <li>-The available options to automatically trigger the Bonus include: Sign Up, Initial Deposit, and Re Up.</li>
      <li>-If the Bonus needs to be assigned manually, select the 'Discretionary' option.</li>
      <li>-Sign up has the capability to use as well a discretionary amount along the rollover rather than a percentage.</li>
    </ul>
    
   <li>Once an automatic trigger is chosen, the 'Auto assign to' option will appear with the following choices:
Online customers only, Retail customers only, All, None.</li>
    

   <li> Once an automatic trigger is chosen, the following criteria is to be filled out:<br/></li>
    <ul style="padding-left: 20px;">
      <li>-Rollover: Rollover times required.</li>
      <li>-Minimum Deposit amount: Minimum deposit amount from which the bonus will start triggering.</li>
      <li>-Percentage: Percentage amount from the deposit that the user wants to convert into the Free bet.</li>
      <li>-Partner product: Being a Free Bet, only one product can be selected.</li>
      <li>-Free Bet ID: Enter the ID of the Free Bet Profile previously created in Manager Tools.</li>
    </ul>
  </li>
  <li>Start Date / End Date: Range of time the user wants the bonus to be applied.</li>
  <li>*Maximum award: Maximum amount a customer can receive.</li>
  <li>Start Date: Calendar and time selector for the user to choose from which date and time the Bonus should start.</li>
  <li>Expiration Date: Calendar and time selector for the user to choose from which date and time the Bonus should finish.</li>
  <li>*Rollover: Requirement to wager a certain amount of money before the client can withdraw any winnings from a bonus or promotion. This count towards all graded wagers with the exception of cancellations, and the base amount from which the rollover starts includes only the bonus amount given.</li>
  <li>Rollover partner product: Users can either pick certain products or include all products to meet the rollover requirement.</li>
  <li>Bonus assignment limit: The number of times the customer is eligible to receive the bonus.</li>
</ul>


<br/>
    
    <img src="/images/download18.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/>
     <img src="/images/download19.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/>
    
   
  `,
    },
    {
      question: "How to Assign a Bonus",
      answer: `
      <span class="font-bold" >When a Bonus is to be manually assigned, either Cash Bonus or Free Bet Bonus</span><br/><br/>
      1. Select 'Assign Bonus' from the menu located at the top.<br/>
      <img src="/images/download20.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/><br/>
      2. Users can pick either a single assignment or a range of assignments:<br/><br/>
      <span style="font-style: italic;">2.1 Single Assignment</span><br/>
      <img src="/images/download21.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/><br/>
    <ul style="list-style-type: none; padding-left: 20px;">
  <li>- Accounts can be located by username, email address, or phone number.</li>
  <li>- Click the 'select bonus' option.</li>
  <li>- Scroll among the list of bonuses to make your selection.</li>
  <li>- Once the bonus is selected, apply '+Assign Bonus'.</li>
</ul>
<br/>
      <img src="/images/download22.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/><br/>
          
      <img src="/images/download23.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/><br/>
          
      <img src="/images/download24.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/><br/>
<span style="font-style: italic;">2.2 Multiple Assignments</span>
       <br/><br/>
       <ul style="list-style-type: none; padding-left: 20px;">
  <li>- Accounts can be located by username, email address, or phone number.</li>
  <li>- Click the 'Multiple Assignment' option.</li>
  <li>- Scroll among the list of bonuses to make your selection.</li>
  <li>- Paste a list of accounts.</li>
  <li>- Click Assign Bonus.</li>
</ul>
<img src="/images/download25.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/><br/>
<br/>
    
   
  `,
    },
    {
      question: "Rollover",
      answer: `
        
      <p>In sports betting, a rollover refers to the number of times the client must wager the deposit and bonus before a withdraw of winnings is processed.  Sportsbooks use rollover requirements to prevent bonus abuse and ensure that players use their bonus funds to place bets on their platform.
<br/><br/>

The Rollover is an 'x' amount of times the money has to be used, in our product, based on the Bonus.
<br/><br/>
The 'Base amount' is the one that counts towards the Rollover, that means, the lower amount between the Risk and Win is the amount that will impact the deduction of the Rollover.
<br/><br/>       
    `,
    },
    {
      question: "Welcome Gift",
      answer: `
          
       In below example, we will setup a <span class="font-bold" >U$D 100.- welcome bonus</span> to all customers. The bonus must be wagered <span class="font-bold" >5 times </span>in either our <span class="font-bold" > Live or Prematch products</span> before it can be withdrawn <span class="font-bold" >(Rollover 5x)</span>. 
       The customer must be part of <span class="font-bold" >Agent MASTER</span> hierarchy in order to be assigned this bonus. Finally, the bonus will available from <span class="font-bold" >2024-10-28</span> to <span class="font-bold" >2024-10-30</span>.
  <br/><br/>
 <span class="font-bold" > Bonus main setup & Award</span></br>
<img src="/images/download26.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/>   <br/>
<span class="font-bold" >Rollover & Applicability</span><br/><br/>
<img src="/images/download27.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/> 
<img src="/images/download28.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/>  
      `,
    },
    {
      question: "Initial Deposit",
      answer: `
          
       In the example below, we will set up a <span class="font-bold" >  50% cash bonus</span> for initial deposits, with a maximum award of  <span class="font-bold" > $400.</span> Customers must deposit a minimum of  <span class="font-bold" > $100</span> to qualify for this bonus. 
       The bonus must be wagered  <span class="font-bold" > 5 times</span> (Rollover 5x) in either our <span class="font-bold" >  Line Pros In-Play Sports Betting</span> or  <span class="font-bold" > Line Pros Pre-Match Sports Betting</span> products before it can be withdrawn. 
       To be assigned this bonus, the customer must be part of the  <span class="font-bold" > Agent JINDO</span> hierarchy. Finally, the bonus will be available from  <span class="font-bold" > 2024-10-25</span> to  <span class="font-bold" > 2024-10-27.</span>
</br><br/>
 <span class="font-bold" > Bonus main setup & Award</span></br>
<img src="/images/download29.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/>   <br/>
<span class="font-bold" >Rollover & Applicability</span><br/><br/>
<img src="/images/download30.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/> 

      `,
    },
    {
      question: "Re-Up",
      answer: `
          
      In the example below, we will set up a <span class="font-bold">40% cash bonus</span> for additional deposits, with a maximum award of <span class="font-bold">$300.</span> Customers must deposit a minimum of <span class="font-bold">$50</span> to qualify for this bonus. The bonus must be wagered <span class="font-bold">4 times</span> (Rollover 4x) in our <span class="font-bold">Line Pros In-Play Sports Betting</span> product before it can be withdrawn. The Maximum Redemptions field indicates that this bonus can be applied only once to the same customer. To be assigned this bonus, the customer must be part of the <span class="font-bold">Agent TEST</span> hierarchy. Finally, the bonus will be available from <span class="font-bold">2024-10-20</span> to <span class="font-bold">2024-10-26.</span></br><br/>
<span class="font-bold" > Bonus main setup & Award</span></br>
<img src="/images/download31.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/>   <br/>
<span class="font-bold" >Rollover & Applicability</span><br/><br/>
<img src="/images/download32.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/> 

     `,
    },
    {
      question: "Manual Assignment",
      answer: `
          In the example below, we will set up a <span class="font-bold" >fixed cash bonus of $100</span> for customers. This bonus will be manually assigned and can be redeemed <span class="font-bold" >unlimited times </span>(Maximum Redemptions: 0) as determined by the operators. 
          Customers must wager the bonus <span class="font-bold">5 times</span> (Rollover 5x) before it can be withdrawn. 
          The bonus is available for eligible products in our <span class="font-bold" >Line Pros In-Play Sports Betting</span> category. To be assigned this bonus, the customer must be part of the <span class="font-bold" >Agent MASTER</span> hierarchy.
           Finally, the bonus will be available from <span class="font-bold" >2024-10-20</span> to <span class="font-bold" >2024-10-26.</span>
      
      </br></br><span class="font-bold" > Bonus main setup & Award</span></br>
<img src="/images/download33.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/>   <br/>
<span class="font-bold" >Rollover & Applicability</span><br/><br/>
<img src="/images/download34.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/> 

     `,
    },
    {
      question: "Welcome Gift",
      answer: `
      In  below example, when a new customer <span class="font-bold">signs up</span>, they automatically receive a <span class="font-bold">$200 free bet</span> added to their account. 
      This free bet can be used on any eligible wager but can only be awarded <span class="font-bold"> once per new customer</span>.
       The bonus must be wagered <span class="font-bold">5 times</span> in our <span class="font-bold">Line Pros In-Play Sports Betting</span> product before it can be withdrawn <span class="font-bold">(Rollover 5x)</span>. 
       The customer must be part of <span class="font-bold">TEST</span> hierarchy in order to be assigned this bonus. Finally, the bonus will available from 2024-10-20 to 2024-10-27. This bonus is linked to the, previously created in MT, Free Bet ID 223.
  
  </br></br><span class="font-bold" > Bonus main setup & Award</span></br>
<img src="/images/download35.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/>   <br/>
<span class="font-bold" >Rollover & Applicability</span><br/><br/>
<img src="/images/download36.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/> 

 `,
    },
    {
      question: "Initial Deposit",
      answer: `
In below example, upon making their first deposit of $200, the customer receives a <span class="font-bold">$100 free bet</span> (50% of the initial deposit).
 This free bet is awarded automatically as long as the deposit meets the <span class="font-bold">minimum criteria of $100</span>. 
 The bonus must be wagered 4 <span class="font-bold">times</span> in our <span class="font-bold">Line Pros In-Play Sports Betting </span>product before it can be withdrawn<span class="font-bold"> (Rollover 4x)</span>. 
 The customer must be part of <span class="font-bold"> TEST</span> hierarchy in order to be assigned this bonus. Finally, the bonus will available from 2024-10-20 to 2024-10-27. 
 This bonus is linked to the, previously created in MT, Free Bet ID 223.


  </br></br><span class="font-bold" > Bonus main setup & Award</span></br>
<img src="/images/download37.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/>   <br/>
<span class="font-bold" >Rollover & Applicability</span><br/><br/>
<img src="/images/download38.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/> 

 `,
    },
    {
      question: "Re Up",
      answer: `
In below example, when  a $ 400.- deposit is made, the customer receives a $160.- free bet (<span class="font-bold">40% of the Re-Up</span>) as long as the deposit meets the <span class="font-bold">minimum criteria of $25</span>.
 This bonus <span class="font-bold">can be awarded up to 2 times</span> per customer. The bonus must be wagered<span class="font-bold">5 times</span> in our <span class="font-bold">Line Pros In-Play Sports Betting</span> product before it can be withdrawn <span class="font-bold">(Rollover 5x)</span>.
  The customer must be part of <span class="font-bold">TEST</span> hierarchy in order to be assigned this bonus. 
  Finally, the bonus will available from <span class="font-bold">2024-10-20</span> to <span class="font-bold">2024-10-27</span>. This bonus is linked to the <span class="font-bold">Free Bet ID 223</span>, previously created in MT.


  </br></br><span class="font-bold" > Bonus main setup & Award</span></br>
<img src="/images/download39.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/>   <br/>
<span class="font-bold" >Rollover & Applicability</span><br/><br/>
<img src="/images/download40.png" alt="Date Filtering Example" class="w-full h-full rounded-md mt-4"/> 

 `,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#001d4e] to-[#010000] px-4 py-8 sm:px-12 md:px-12 lg:px-12 xl:px-12 2xl:px-12 sm:py-10 md:py-10 h-[300px] sm:h-[320px] md:h[350px] lg:h[350px] xl:h[350px]  md:max-lg:h-[500px] lg:max-xl:h-[500px] xl:max-2xl:h-[450px]">
        <div className="mx-auto">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center text-sm sm:text-xl md:text-xl lg:text-xl xl:text-xl text-white hover:text-gray-300"
          >
            <MdArrowBackIosNew className="h-4 w-4 sm:h-7 sm:w-7 md:h-7 md:w-7 lg:h-7 lg:w-7 xl:h-7 xl:w-7 text-white" />
            Go Back
          </Link>
          {/* Min */}
          <div className="flex flex-col gap-4 md:max-lg:flex-col lg:max-xl:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row sm:items-center sm:justify-between sm:pt-16 ">
            <div>
              <h1 className="text-2xl font-semibold text-white sm:text-[40px] xl:max-2xl:text-[35px]">
                About Client
              </h1>
              <p className="text-sm  text-gray-300/85 sm:text-[28px] md:text-[28px] lg:text-[28px] xl:text-[28px]  2xl:text-[28px] xl:max-2xl:text-[25px]  leading-2 sm:leading-9 tracking-wide py-5 sm:py-10">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry.
                <br /> Lorem ipsum has been the industry&apos;s standard dummy
                text eve.
              </p>
            </div>
            <div className="relative w-full sm:max-w-xl sm:ml-auto md:max-lg:max-w-full lg:max-xl:max-w-full">
              <input
                type="text"
                placeholder="Search About Reports"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full font-normal rounded-xl focus:outline-none bg-white py-3 pl-10 pr-4  text-gray-900 placeholder:text-gray-400/80 sm:py-5 lg:py-5 xl:py-5 sm:pl-24 text-sm sm:text-2xl lg:text-2xl xl:text-2xl xl:max-2xl:text-xl xl:max-2xl:py-4 xl:max-2xl:pl-16 tracking-wide"
              />
              <CiSearch className="absolute left-3 top-1/2  -translate-y-1/2 text-gray-400 sm:left-5 h-5 w-5 sm:h-12 sm:w-12 xl:max-2xl:w-10 xl:max-2xl:h-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="mx-auto py-8 sm:py-28">
        <h2 className="mb-10 text-2xl sm:text-4xl lg:text-4xl md:text-4xl xl:text-4xl font-semibold text-[#011e50] px-2 xl:max-2xl:text-3xl">
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
                <span className="text-gray-900 tracking-wide text-md sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl xl:max-2xl:text-xl">
                  {result.question}
                </span>
                <MdArrowForwardIos
                  className={`h-8 w-8 sm:h-8 sm:w-8 md:h-8 md:w-8  lg:h-8 lg:w-8 xl:h-8 xl:w-8 text-black  transition-transform duration-200 ease-in-out group-hover:translate-x-1 ${
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
                  className="border-t border-gray-200 bg-gray-50 p-4 text-gray-900 tracking-wide text-md sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl xl:max-2xl:text-xl"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
