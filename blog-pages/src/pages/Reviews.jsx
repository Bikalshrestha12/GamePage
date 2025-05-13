import React, {useState} from 'react'
import { CiCreditCardOff } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { GiFeather, GiThink } from 'react-icons/gi';
import { IoCheckmark } from 'react-icons/io5';
import { MdForum, MdOutlineArrowRightAlt, MdOutlineSupport } from 'react-icons/md';
import { RiComputerFill, RiFileList3Fill } from 'react-icons/ri';
import Sponser from '../components/Sponser';

const Reviews = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    if (rating === 0 || comment.trim() === '') {
      alert('Please provide a rating and a comment.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <>
    <div className='m-8'>
      <div className=''>

        <div className='flex mt-10'>
          <div>
            <h1 className='font-bold text-4xl text-gray-700'>Customer Reviews template for website</h1>
            <p className='w-7/9 my-6 text-gray-600'>Boost your brand's reputation and conversion with our coding-free Customer Reviews template for website pages. Let your satisfied customers share their experiences, fostering authenticity and attracting potential buyers. Show the world the value you bring through genuine feedback, and watch your business flourish.</p>
          </div>
          <div className='border-none shadow-2xl p-4 hover:border-pink-600 w-6/9 text-center'>
            <ul className='flex p-4 justify-center'>
              <li><FaStar className='text-yellow-300' /></li>
              <li><FaStar className='text-yellow-300' /></li>
              <li><FaStar className='text-yellow-300' /></li>
              <li><FaStar className='text-yellow-300' /></li>
              <li><FaStar className='text-yellow-300' /></li>
            </ul>
            <p>Rated 4.8 out of 5 from over <br /> <a href="#" className='hover:underline'>800 reviews</a>  on G2.com</p>
          </div>
        </div>

        <div>
          <div className="max-w-full mx-auto p-6  shadow-md rounded-lg my-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">EndGame Game Review</h1>

            {/* // Game Description  */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800">About the Game</h2>
              <p className="text-lg text-gray-700 mt-4">
                This is a fun and engaging quiz game that challenges your knowledge across a variety of categories.
                With multiple-choice questions and instant feedback, it offers a unique and interactive experience
                for players of all ages.
              </p>
            </div>

            {/* // Game Features  */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800">Game Features</h2>
              <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
                <li>Multiple categories of questions</li>
                <li>Instant feedback on your answers</li>
                <li>Customizable quiz duration</li>
                <li>Engaging UI with a smooth experience</li>
              </ul>
            </div>

            {/* // Game Pros and Cons  */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800">Pros and Cons</h2>
              <div className="grid grid-cols-2 gap-6 mt-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Pros</h3>
                  <ul className="list-disc list-inside text-lg text-gray-700 mt-2">
                    <li>Fun and challenging</li>
                    <li>Great for learning new things</li>
                    <li>Simple and intuitive interface</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Cons</h3>
                  <ul className="list-disc list-inside text-lg text-gray-700 mt-2">
                    <li>Limited question variety</li>
                    <li>Could use more visual effects</li>
                    <li>Repetitive after a few rounds</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* // Rating and Comment Section  */}
            {submitted ? (
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Thank you for your review!</h2>
                <p className="text-xl text-gray-700">
                  You gave a rating of {rating} stars with the comment:
                </p>
                <p className="italic text-gray-600 mt-2">"{comment}"</p>
              </div>
            ) : (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Leave Your Review</h2>

                {/* // Rating  */}
                <div className="flex items-center mb-4">
                  <p className="text-lg text-gray-800 mr-4">Your Rating:</p>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => handleRating(star)}
                      className={`text-xl cursor-pointer ${
                        star <= rating ? 'text-yellow-500' : 'text-gray-400'
                      }`}
                    >
                      ★
                    </button>
                  ))}
                </div>

                {/* // Comment */}
                <div className="mb-4">
                  <textarea
                    className="w-full p-3 border-2 border-gray-300 rounded-lg text-lg text-gray-700"
                    placeholder="Write your comment here..."
                    value={comment}
                    onChange={handleCommentChange}
                    rows="5"
                  />
                </div>

                {/* // Submit Button  */}
                <div className="text-center">
                  <button
                    onClick={handleSubmit}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg text-xl"
                  >
                    Submit Review
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-7 my-8 text-gray-800'>
          <div className='shadow-2xl rounded-lg p-4'>
            <p className='flex mt-5'> <div className='shadow-lg rounded-full m-2'><CiCreditCardOff /></div> <span className=''>No credit card required</span> </p>
            <p className='flex mt-5'> <div className='shadow-lg rounded-full m-2'><GiFeather /></div> Easy installation</p>
            <p className='flex mt-5'> <div className='shadow-lg rounded-full m-2'><RiComputerFill /></div> Works on 99.9% of websites</p>
            <p className='flex mt-5 '> <div className='shadow-lg rounded-full m-2'><GiThink /></div> Free plan available</p>
          </div>

          <div className='shadow-2xl p-4'>
            <h2 className='text-2xl font-bold text-gray-900'>Features</h2>
            <div className='flex'>
              <div className='mx-2'>
                <p className='flex p-2'><IoCheckmark className='justify-center justify-items-center my-auto mr-2' /> Easy Review Source Fill Out </p>
                <p className='flex p-2'><IoCheckmark className='justify-center justify-items-center my-auto mr-2' /> Review Editing & Filter Options </p>
                <p className='flex p-2'><IoCheckmark className='justify-center justify-items-center my-auto mr-2' /> Multiple Review Sorting Options </p>
                <p className='flex p-2'><IoCheckmark className='justify-center justify-items-center my-auto mr-2' /> Star Rating Snippet </p>
                <p className='flex p-2'><IoCheckmark className='justify-center justify-items-center my-auto mr-2' /> 3 Review Card Styles </p>
                <p className='flex p-2'><IoCheckmark className='justify-center justify-items-center my-auto mr-2' /> Multiple Review Source Designs </p>
                <p className='flex p-2'><IoCheckmark className='justify-center justify-items-center my-auto mr-2' /> Verified Reviewer Checkmarks </p>
                <p className='flex p-2'><IoCheckmark className='justify-center justify-items-center my-auto mr-2' /> Call-to-Action Button for More Reviews </p>
              </div>
              <div>
                <p className='flex p-2'><IoCheckmark className='justify-center justify-items-center my-auto mr-2' /> Advanced Design Customization </p>
                <p className='flex p-2'><IoCheckmark className='justify-center justify-items-center my-auto mr-2' /> Multiple Layout Styles </p>
                <p className='flex p-2'><IoCheckmark className='justify-center justify-items-center my-auto mr-2' /> Multiple Languages Support </p>
                <p className='flex p-2'><IoCheckmark className='justify-center justify-items-center my-auto mr-2' /> Tech-Free Customization </p>
                <p className='flex p-2'><IoCheckmark className='justify-center justify-items-center my-auto mr-2' /> Mobile-Friendly </p>
                <p className='flex p-2'><IoCheckmark className='justify-center justify-items-center my-auto mr-2' /> Page-Speed Friendly Lazy Loading </p>
                <p className='flex p-2'><IoCheckmark className='justify-center justify-items-center my-auto mr-2' /> Custom JavaScript Editor </p>
                <p className='flex p-2'><IoCheckmark className='justify-center justify-items-center my-auto mr-2' /> Fast Website Integration </p>
              </div>
            </div>
          </div>

          <div className='shadow-2xl p-9 px-12 rounded-xl'>
            <h2 className='text-2xl font-bold text-gray-900'>Categories</h2>
            <p className='mt-5'>Other</p>
          </div>
        </div>

        {/* <div>Icon</div> */}
        <div>
          <Sponser />
        </div>

        <div className='my-8 text-gray-700 shadow-lg w-6/9 mx-auto py-8 px-10 rounded-xl'>
          <h2 className='font-bold text-3xl mt-3 mb-5 text-gray-900'>Help with Customer Reviews Setup and Website Installation</h2>
          <p>Whether you need assistance, seek advice, or wish to share your thoughts, Elfsight is here to support every step of your way on the widget template journey. We offer a bunch of resources just waiting to be revealed:</p>

          <div className='flex my-6 gap-4'>
            <div className='w-3/9 hover:shadow-lg p-4'>
              <MdOutlineSupport />
              <h3 className='text-2xl my-1 py-1'>Support</h3>
              <p className='p-1'>Reach out to the Support Team to navigate you through any particular obstacles. Yet, if you prefer an independent route, you can browse related articles to locate answers in the Help Center.</p>
              <a href="#" className='flex hover:text-blue-400 mt-2'>Ask for help <MdOutlineArrowRightAlt className='items-center my-auto py-auto mx-2' /> </a>
            </div>

            <div className='w-3/9 hover:shadow-lg p-4'>
              <MdForum />
              <h3 className='text-2xl my-1 py-1'>Forum</h3>
              <p>Join our exclusive community of similar-minded experts and gain access to a vast amount of wisdom. Actively engage in continuous initiatives to collect motivation.</p>
              <a href="#" className='flex hover:text-blue-400 mt-2'>Join us <MdOutlineArrowRightAlt className='items-center my-auto py-auto mx-2' /></a>
            </div>

            <div className='w-3/9 hover:shadow-lg p-4'>
            <RiFileList3Fill />
              <h3 className='text-2xl my-1 py-1'>Wishlist</h3>
              <p>We place a significant emphasis on your input and ideas—feel free to share your innovative suggestions and submit feature or widget requests using our Wishlist. Let's collaborate in shaping the future of Elfsight!</p>
              <a href="#" className='flex hover:text-blue-400 mt-2'>Share Your Idea <MdOutlineArrowRightAlt className='items-center my-auto py-auto mx-2' /> </a>
            </div>
          </div>
        </div>

      </div>
    </div>




      {/* <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg my-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">EndGame Game Review</h1>

        // Game Description 
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">About the Game</h2>
          <p className="text-lg text-gray-700 mt-4">
            This is a fun and engaging quiz game that challenges your knowledge across a variety of categories.
            With multiple-choice questions and instant feedback, it offers a unique and interactive experience
            for players of all ages.
          </p>
        </div>

        // Game Features 
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Game Features</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
            <li>Multiple categories of questions</li>
            <li>Instant feedback on your answers</li>
            <li>Customizable quiz duration</li>
            <li>Engaging UI with a smooth experience</li>
          </ul>
        </div>

        // Game Pros and Cons 
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Pros and Cons</h2>
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Pros</h3>
              <ul className="list-disc list-inside text-lg text-gray-700 mt-2">
                <li>Fun and challenging</li>
                <li>Great for learning new things</li>
                <li>Simple and intuitive interface</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Cons</h3>
              <ul className="list-disc list-inside text-lg text-gray-700 mt-2">
                <li>Limited question variety</li>
                <li>Could use more visual effects</li>
                <li>Repetitive after a few rounds</li>
              </ul>
            </div>
          </div>
        </div>

        // Rating and Comment Section 
        {submitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Thank you for your review!</h2>
            <p className="text-xl text-gray-700">
              You gave a rating of {rating} stars with the comment:
            </p>
            <p className="italic text-gray-600 mt-2">"{comment}"</p>
          </div>
        ) : (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Leave Your Review</h2>

            // Rating 
            <div className="flex items-center mb-4">
              <p className="text-lg text-gray-800 mr-4">Your Rating:</p>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRating(star)}
                  className={`text-xl cursor-pointer ${
                    star <= rating ? 'text-yellow-500' : 'text-gray-400'
                  }`}
                >
                  ★
                </button>
              ))}
            </div>

            // Comment
            <div className="mb-4">
              <textarea
                className="w-full p-3 border-2 border-gray-300 rounded-lg text-lg text-gray-700"
                placeholder="Write your comment here..."
                value={comment}
                onChange={handleCommentChange}
                rows="5"
              />
            </div>

            // Submit Button 
            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg text-xl"
              >
                Submit Review
              </button>
            </div>
          </div>
        )}
      </div> */}
      </>
  );
}

export default Reviews
