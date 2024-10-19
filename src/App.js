import  { useState } from 'react';
//import './bg-image.jpg'
import './index.css'

import HomeScreen from './components/HomeScreen';
import QuizScreen from './components/QuizScreen.jsx';
import ScoreScreen from './components/ScoreScreen.jsx';
import SelectCategoory from './components/SelectCategoory.jsx';
import {DEVQuestions} from "./constants/Data"


const App = () => {
  const [questions,setquestions]=useState(DEVQuestions);
  const [step, setStep] = useState(0);  // 0: Home, 1: Quiz, 2: Result
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  
  const home=()=>{
    setStep(1);
  }
  const startQuiz = () => {
    setStep(2);
    setScore(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
  };

  const finishQuiz = (finalScore) => {
    setScore(finalScore);
    setStep(3);
  };

  return (
    <div className="min-h-screen ">

    {step === 0 && <SelectCategoory home={home}  questions={questions} setquestions={setquestions} />}
      {step === 1 && <HomeScreen startQuiz={startQuiz}  />}
      {step === 2 && <QuizScreen finishQuiz={finishQuiz} setIncorrectAnswers={setIncorrectAnswers}  setCorrectAnswers={setCorrectAnswers} incorrectAnswers={incorrectAnswers}  correctAnswers={correctAnswers} questions={questions} />}
      {step === 3 && <ScoreScreen score={score} correctAnswers={correctAnswers} incorrectAnswers={incorrectAnswers} playAgain={startQuiz} />}
    </div>
  );
};

export default App;


































