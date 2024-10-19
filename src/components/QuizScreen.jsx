import React, { useState } from 'react';

const QuizScreen = ({ finishQuiz, questions, setIncorrectAnswers, setCorrectAnswers, incorrectAnswers, correctAnswers }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(Number(event.target.value));
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correct) {
     
      setScore(score+1);
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setIsQuizFinished(true);
      finishQuiz(score + 1, correctAnswers + 1, incorrectAnswers);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null); // Reset option
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 via-blue-300 to-green-300
">
    
      <div className="bg-white relative  rounded-lg shadow-lg w-full max-w-sm text-center h-[500px] flex flex-col justify-center">
      <div
  className={` absolute top-0 left-0 p-0 h-6 text-center bg-blue-500`}
  style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
>
    <div className='relative'>
    <p className='absolute top-0 left-2 text-white'>
      {(currentQuestion / questions.length) * 100} % 
    </p>
    </div>
</div>
      <div className='p-8'>
      {!isQuizFinished ? (
          <div >
            <h2 className="text-2xl font-bold mb-4">{questions[currentQuestion].question}</h2>
            
            <div className="mt-4">
              <p className="text-lg mb-2">Select your answer:</p>
              <div className="flex flex-col space-y-2">
                {questions[currentQuestion].options.map((option, index) => (
                  <div 
                    key={index} 
                    className={`${questions[currentQuestion].backgroundColor} p-2 rounded-lg`} // Apply background color here
                  >
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        value={index} 
                        checked={selectedOption === index} 
                        onChange={handleOptionChange} 
                        className="mr-2" 
                      />
                      <span className="text-md">{option}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between mt-6"> 
              <button
                className={`bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-500 transition-all duration-300 ${currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0} // Disable button for first question
              >
                Previous
              </button>
              
              <button
                className={`bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300 ${selectedOption === null ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleNextQuestion}
                disabled={selectedOption === null}
              >
                {currentQuestion + 1 === questions.length ? "Finish Quiz" : "Next"}
              </button>
            </div>
          </div>
        ) : (
          <h2 className="text-2xl font-bold mb-4">Your Total Score: {score} / {questions.length}</h2>
        )}
        </div>
      </div>

    </div>
  );
};

export default QuizScreen;
