// import React, { useContext, useEffect, useState } from 'react'
// import { GameContext } from '../contexts/GameContext';
// import Title from './Title';
// import Gameitem from './Gameitem';
// import { NavLink } from 'react-router-dom';

// const LatestNews = () => {
//     const {newsArticles} = useContext(GameContext);
//     const [news, SetNews] = useState([]);

//     useEffect(() => {
//         SetNews(newsArticles.slice(0,6)); 
//       },[])
//   return (
//     <div>
//         <div className=' bg-gray-100 px-4 py-12'>
//             <div className='text-center py-8 text-3xl'>
//                 <Title text1={'LATEST'} text2={'News'} />
//                 <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores minus voluptate nihil omnis architecto, eos vel culpa, necessitatibus voluptatem aut corrupti ex accusantium amet ea natus exercitationem soluta nemo. Ullam?
//                 </p>
//             </div>
//                 {/* rendering News */}

//             <div className="">
//                 <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
//                     {/* <h2 className="text-3xl font-bold text-slate-900 mb-8">Latest Blog Posts</h2> */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
//                         {news.map((item, index) => (
//                         <div className="bg-white rounded overflow-hidden" key={index}>
//                             <img src="https://readymadeui.com/cardImg.webp" alt="Blog Post 1" className="w-full h-52 object-cover" />
//                             {/* <img src={item.gameimage} alt="Blog Post 1" className="w-full h-52 object-cover" /> */}
//                             <div className="p-6">
//                             <h3 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h3>
//                             <p className="text-slate-600 text-sm leading-relaxed">{item.description}...</p>
//                             <p className="text-orange-500 text-[13px] font-semibold mt-2">{item.gameUpdateVersion}/in <span className='text-orange-700'> Games</span> </p>
//                             <NavLink to='news'><button className="mt-6 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px] font-medium">Read More</button></NavLink>
//                             </div>
//                         </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             {/* <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 m-8'>
//             {
//                 news.map((item, index) => (
//                 // console.log(item),
//                 <Gameitem key = {index} id ={item.id} image = {item.image} name={item.title} price ={item.price} />
//                 ))
//             }
//             </div> */}
//         </div>
//     </div>
//   )
// }

// export default LatestNews



import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../contexts/GameContext';
import Title from './Title';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.2 },
  }),
};

const buttonVariants = {
  hover: { scale: 1.1 },
  transition: { type: 'spring', stiffness: 300 },
};

const LatestNews = () => {
  const { newsArticles } = useContext(GameContext);
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(newsArticles.slice(0, 3));
  }, [newsArticles]);

  if (!news.length) {
    return <div className="text-center py-8">No news available</div>;
  }

  return (
    <div className="bg-gray-100 px-4 py-12">
      <div className="text-center py-8 text-3xl">
        <Title text1={'LATEST'} text2={'News'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores minus voluptate nihil omnis architecto, eos
          vel culpa, necessitatibus voluptatem aut corrupti ex accusantium amet ea natus exercitationem soluta nemo. Ullam?
        </p>
      </div>

      <div className="max-w-5xl max-lg:max-w-3xl mx-auto px-4">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
            {news.map((item, index) => (
              <motion.div
                className="bg-white rounded overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                key={item.id || index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <img
                  src={item.image || 'https://readymadeui.com/cardImg.webp'}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">{item.description}...</p>
                  <p className="text-orange-500 text-[13px] font-semibold mt-2">
                    {item.gameUpdateVersion}/in <span className="text-orange-700">Games</span>
                  </p>
                  <NavLink to="news">
                    <motion.button
                      aria-label={`Read more about ${item.title}`}
                      className="mt-6 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px] font-medium"
                      whileHover={buttonVariants.hover}
                      transition={buttonVariants.transition}
                    >
                      Read More
                    </motion.button>
                  </NavLink>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div>
            <motion.button className='transition-colors duration-400 hover:underline hover:text-yellow-400 hover:shadow-2xl text-md'><Link to='news'  className='absolute right-4'>see more</Link></motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;