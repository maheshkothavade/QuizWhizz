import React from 'react';

const ScoreScreen = ({ score, totalQuestions, correctAnswers, incorrectAnswers, playAgain }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent"> {/* Background */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm h-[500px] flex flex-col justify-between"> {/* Card  */}
        
        <div className="flex-grow flex flex-col items-center justify-center text-center"> {/* Centering the score from the top */}
          <h3 className="text-4xl font-bold mb-20">Your Score: {score}</h3> {/* Score styling */}
          
          <div className="w-full bg-green-200 p-4 mb-2 rounded"> {/* correct answers bg*/}
            <p className="text-lg text-green-800">Correct Answers: {correctAnswers}</p>
          </div>
          
          <div className="w-full bg-red-200 p-4 rounded"> {/* incorrect answers bg */}
            <p className="text-lg text-red-800">Incorrect Answers: {incorrectAnswers}</p>
          </div>
        </div>

        <button 
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300" 
          onClick={playAgain}
        >
          Play Again 👍
        </button>
      </div>
    </div>
  );
};

export default ScoreScreen;
