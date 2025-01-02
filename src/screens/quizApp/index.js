import React, { useEffect, useState } from 'react'
import questionData from "./questions.json";

function WorkoutsOne() {
    const [currentQuestion , setCurrentQuestion] = useState(0);
    const [score , setScore] = useState(0)
    const [showScore , setShowScore] = useState(false)
    const [timer , setTimer] = useState(10)

    useEffect(()=>{
        let interval;
        if(timer > 0 && !showScore){
            interval = setInterval(()=>{
                setTimer((prevTimer) => prevTimer - 1)
            },1000)
        }else{
            clearInterval(interval)
            setShowScore(true)
        }

        return () => clearInterval(interval)
    },[timer , showScore])

    const handleAnswerClick = (selectedOption) => {
        if(selectedOption === questionData[currentQuestion].answer){
           setScore((prevScore) => prevScore + 1)
        }

        if(currentQuestion < questionData.length - 1){
            setCurrentQuestion((prevQuestion) => prevQuestion + 1)
            setTimer(10);
        }else{
            setShowScore(true)
        }
    }

    const handleRestartQuiz = () => {
        setCurrentQuestion(0);
        setShowScore(false);
        setScore(0);
        setTimer(10);
    }
  return (
    <div>
        <h3>Quiz App</h3>
        {showScore ? 
        (
        <div>
        <button onClick={handleRestartQuiz}>Restart</button>
        <h3>Your score is {score}/{questionData.length}</h3>
        </div>
        ) : 
        (
            <>
            <div>
                <h3>Question {currentQuestion + 1}</h3>
                <h3>{questionData[currentQuestion].question}</h3>
                {questionData[currentQuestion].options.map((option,index)=>{
                    return <button onClick={()=>handleAnswerClick(option)} key={index}>{option}</button>
                })}
            </div>
            <br/>
            <div>
                Timer Left : <span>{timer} s</span>
            </div>
            </>
        )
        }
        
    </div>
  )
}

export default WorkoutsOne