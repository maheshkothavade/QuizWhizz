import React from 'react';

const HomeScreen = ({ startQuiz }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent"> {/* Background styling for the whole screen */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xs h-[450px] flex flex-col justify-between text-center"> {/* Card styling */}
        
        {/* Row with image  & adjacent text */}
        <div className="flex items-center justify-center mb-6">
          <img 
            src={require('./logo.jpg')} 
            alt="Upraised" 
            className="w-6 h-6 object-cover mr-4" 
          />
          <h2 className="text-xl font-semibold">Upraised</h2> 
        </div>

        <h1 className="text-3xl font-bold mb-4">Ready to Start</h1> 
        <p className="text-lg text-gray-500 mb-4 mt-auto">QuizBuzz</p> 

       
        <div className="mt-auto"> {/* This makes the button container push to the bottom */}
          <button 
            className="bg-blue-500 text-white text-lg py-3 px-6 rounded-lg hover:bg-blue-600 transition-all duration-300"
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
