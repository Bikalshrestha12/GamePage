import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Pacific", "Arctic"],
        answer: "Pacific"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
        answer: "Shakespeare"
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["Mount Everest", "K2", "Kangchenjunga", "Mount Kilimanjaro"],
        answer: "Mount Everest"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Seoul", "Beijing", "Tokyo", "Kyoto"],
        answer: "Tokyo"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "What is the largest country in the world?",
        options: ["China", "United States", "India", "Russia"],
        answer: "Russia"
    },
    {
        question: "How many continents are there?",
        options: ["6", "7", "8", "5"],
        answer: "7"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Picasso", "Van Gogh", "Da Vinci", "Michelangelo"],
        answer: "Da Vinci"
    },
    {
        question: "What is the square root of 144?",
        options: ["10", "11", "12", "13"],
        answer: "12"
    },
    {
        question: "What is the fastest land animal?",
        options: ["Lion", "Elephant", "Cheetah", "Giraffe"],
        answer: "Cheetah"
    },
    {
        question: "What is the largest planet in our Solar System?",
        options: ["Earth", "Saturn", "Jupiter", "Mars"],
        answer: "Jupiter"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["South Korea", "China", "Japan", "Thailand"],
        answer: "Japan"
    },
    {
        question: "Which ocean is the smallest?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Arctic"
    }
];

const Question = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const navigate = useNavigate();
    // const { navigate } = useContext(GameContext);

    const handleAnswer = (selectedOption) => {
        const correctAnswer = questions[currentQuestionIndex].answer;
        if (selectedOption === correctAnswer) {
            setScore(score + 1);
        }

        // Move to the next question or finish the quiz
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsFinished(true);
        }
    };

    const handleRetry = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setIsFinished(false);
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="quiz-container items-center justify-center flex flex-col gap-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Quiz Game</h1>
            {isFinished ? (
                <div className="result">
                    <h2 className='font-bold text-2xl'>Your Score: {score}/{questions.length}</h2>
                    <div className='flex flex-col md:flex-row'>
                        <button onClick={handleRetry} className='text-black bg-white border border-gray-500 rounded-4xl hover:bg-gray-400 mt-5 text-center py-2 px-4 cursor-pointer items-center m-5'>Retry</button>
                        
                        <button onClick={() => navigate('/game')} className='text-black bg-white border border-gray-500 rounded-4xl hover:bg-gray-400 mt-5 text-center py-2 px-4 cursor-pointer items-center m-5'>Back</button>
                    </div>
                </div>
            ) : (
                <div className="question-container">
                    <h3 className='font-semibold text-3xl'>{currentQuestion.question}</h3>
                    <ul className="options-list flex flex-col items-center py-4 font-semibold text-2xl gap-2">
                        {currentQuestion.options.map((option, index) => (
                            
                            <li
                                key={index}
                                onClick={() => handleAnswer(option)}
                                className="option cursor-pointer bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-lg transition duration-300 ease-in-out"
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Question;
