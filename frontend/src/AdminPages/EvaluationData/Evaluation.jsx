import React from "react";

const SurveyDataPage = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-purple-900 px-4 py-8 mr-6 mt-10 rounded-xl">
        <div className="flex flex-col bg-purple-100 items-center justify-center  py-6 px-4 md:px-8 w-full sm:w-[50%] md:w-[680px] rounded-lg shadow-md">
          <h1 className="text-2xl md:text-4xl font-bold text-purple-900 py-2">
            Survey Data
          </h1>

          <div className="w-full mt-6 space-y-4">
            <a
              href="https://docs.google.com/spreadsheets/d/1cqagJps4w0HMBoo7mN-ODwhweVYyGw5XHPGFX3CqDNk/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-lg font-semibold text-white py-2 rounded-lg  transition bg-gradient-to-r from-orange-400 to-purple-700 hover:from-purple-900 hover:to-orange-700 shadow-2xl"
            >
              Employer Survey
            </a>

            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-lg font-semibold text-white py-2 rounded-lg bg-gradient-to-r from-orange-400 to-purple-700 hover:from-purple-900 hover:to-orange-700 shadow-2xl  transition"
            >
              Student Evaluation
            </a>

            <a
              href="https://docs.google.com/spreadsheets/d/1utr4Bjk7MOyhp6HKBE6Z8sIrivkKApOK0_j2wlt5rFI/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-lg font-semibold text-white py-2 rounded-lg  bg-gradient-to-r from-orange-400 to-purple-700 hover:from-purple-900 hover:to-orange-700 shadow-2xl transition"
            >
              Faculty Survey
            </a>

            <a
              href="https://docs.google.com/spreadsheets/d/1M5WdFle4N_lt_2DL4HoX8WwZ3JKjRr4xvu3_MT9CihY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-lg font-semibold text-white bg-gradient-to-r from-orange-400 to-purple-700 hover:from-purple-900 hover:to-orange-700 shadow-2xl  py-2 rounded-lg  transition"
            >
              Alumni Survey
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SurveyDataPage;
