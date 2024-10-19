import React from 'react';

const HomeScreen = ({ startQuiz }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 via-blue-300 to-green-300"> {/* Gradient background */}
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm h-[480px] flex flex-col justify-between text-center border border-gray-200"> {/* Card with border and shadow */}
        
        {/* Logo & app name */}
        <div className="flex items-center justify-center mb-6 space-x-3">
          <img 
            src={require('./logo.jpg')} 
            alt="Upraised" 
            className="w-10 h-10 object-cover rounded-full shadow-md" 
          />
          <h2 className="text-2xl font-bold text-gray-800 tracking-wide">Upraised</h2>
        </div>

        {/*  adjusted spacing */}
        <div className="flex flex-col space-y-4"> {/* Vertical space between title, subtitle */}
          <h1 className="text-4xl font-extrabold text-gray-900">Are You Ready?</h1> 
          <p className="text-lg text-gray-500">QuizBuzz</p>
        </div>

        
        <div className="mt-8"> 
          <button 
            className="bg-blue-500 text-white text-lg py-3 px-8 rounded-full hover:bg-blue-600 hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300 ease-in-out"
            onClick={startQuiz}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
