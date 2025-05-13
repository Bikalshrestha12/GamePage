import React from 'react'
import Question from '../components/Question'

const GamePlace = () => {
  return (
    <div className='m-8 border-t pt-14'>
        <Question />
    </div>
    // <div class="bg-gray-100 font-sans">
    //   <div class="container mx-auto p-8">
    //     <div id="quiz-container" class="bg-white p-8 rounded-lg shadow-lg">
    //         <h1 class="text-3xl font-bold mb-6 text-center">Quiz Game</h1>

    //         <div id="question-container" class="mb-4">
    //             {/* <!-- Question will be injected here --> */}
    //         </div>

    //         <div id="options-container" class="space-y-4">
    //             {/* <!-- Options will be injected here --> */}
    //         </div>

    //         <button id="next-button" class="bg-blue-500 text-white px-6 py-2 rounded-lg mt-4 hidden" onclick="nextQuestion()">Next</button>
    //         <div id="result" class="mt-6 text-center hidden">
    //             <p id="score" class="text-2xl font-bold">Your Score: 0</p>
    //             <button id="retry-button" class="bg-green-500 text-white px-6 py-2 rounded-lg mt-4" onclick="retryQuiz()">Retry</button>
    //         </div>
    //     </div>
    // </div>
    // </div>
  )
}

export default GamePlace
