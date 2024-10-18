import React, { useEffect } from 'react';
import { DEVQuestions, DSAQuestions, MLQuestions, AptitudeQuestions, OOPQuestions, DBMSQuestions } from "../constants/Data";
import { Button } from '@mui/material';

const SelectCategory = ({ questions, setquestions, home }) => {
  
  const handleQuestions = (e) => {
    switch (e.target.value) {
      case "Development Quiz":
        setquestions(DEVQuestions);
        break;
      case "DSA Quiz":
        setquestions(DSAQuestions);
        break;
      case "ML Quiz":
        setquestions(MLQuestions);
        break;
      case "DBMS Quiz":
        setquestions(DBMSQuestions);
        break;
      case "Aptitude Quiz":
        setquestions(AptitudeQuestions);
        break;
      default:
        setquestions(OOPQuestions);
        break;
    }
  };

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent"> 
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xs h-[450px] flex flex-col justify-between"> {/* Match HomeScreen styling */}
        <h2 className="text-2xl font-bold mb-4 text-center">Select a Quiz</h2> {/* Heading of card  */}

        <select 
          name="Category" 
          onChange={handleQuestions} 
          className="w-full border border-gray-300 rounded-lg p-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        >
          <option value="Development Quiz">Development Quiz</option>
          <option value="DSA Quiz">DSA Quiz</option>
          <option value="ML Quiz">ML Quiz</option>
          <option value="DBMS Quiz">DBMS Quiz</option>
          <option value="Aptitude Quiz">Aptitude Quiz</option>
          <option value="OOPs Quiz">OOPs Quiz</option>
        </select>

        <div className="flex-grow flex items-end justify-center mt-auto"> 
          <Button 
            variant="contained" 
            color="primary" 
            onClick={home}
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            Proceed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelectCategory;
