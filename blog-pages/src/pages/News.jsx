import React, { useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import './News.css';

  export const newsArticles = [
    {
      "title": "Cyber Rebellion: Rise of the Hackers",
      "description": "Experience a futuristic showdown between rogue AI and underground hackers in this epic cyberpunk expansion.",
      "link": "#",
      "gameUpdateVersion": "1.5.2",
      "gameImage": "https://www.bing.com/th/id/OIP.bxGAkSROKek1Pm4uoZF1KAHaEK?w=240&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
    },
    {
      "title": "Frozen Wastes: Arctic Conquest",
      "description": "Brace yourself for icy battlegrounds and survival challenges in the Arctic zones.",
      "link": "#",
      "gameUpdateVersion": "2.1.0",
      "gameImage": "images/frozen_wastes.jpg"
    },
    {
      "title": "Dragons of Vyrneth: Flame Unleashed",
      "description": "Unleash ancient dragon powers in a mythical new chapter filled with fire and fury.",
      "link": "#",
      "gameUpdateVersion": "3.0.3",
      "gameImage": "images/dragons_vyrneth.jpg"
    },
    {
      "title": "Shadow Protocol: Black Ops",
      "description": "Stealth, sabotage, and secret missions dominate this dark ops update.",
      "link": "#",
      "gameUpdateVersion": "2.4.7",
      "gameImage": "images/shadow_protocol.jpg"
    },
    {
      "title": "Solar Strikers: Galaxy Wars",
      "description": "Take to the stars in this space combat expansion filled with new ships and interstellar alliances.",
      "link": "#",
      "gameUpdateVersion": "3.2.9",
      "gameImage": "images/solar_strikers.jpg"
    },
    {
      "title": "Doomline: Apocalypse Begins",
      "description": "Survive the fall of civilization in a gritty, post-apocalyptic world.",
      "link": "#",
      "gameUpdateVersion": "1.0.9",
      "gameImage": "images/doomline_apocalypse.jpg"
    },
    {
      "title": "Bladebound: The Crimson War",
      "description": "Wield ancient swords and defend your kingdom in this action-packed melee update.",
      "link": "#",
      "gameUpdateVersion": "1.8.1",
      "gameImage": "images/bladebound_crimson.jpg"
    },
    {
      "title": "Neon Circuit: Rebooted",
      "description": "Enter the grid in this electrifying retro-futuristic cyber world.",
      "link": "#",
      "gameUpdateVersion": "2.0.2",
      "gameImage": "images/neon_circuit.jpg"
    },
    {
      "title": "Witchlight Grove: Curse of the Spirits",
      "description": "Explore enchanted forests and break ancient curses in this magical update.",
      "link": "#",
      "gameUpdateVersion": "1.6.4",
      "gameImage": "images/witchlight_grove.jpg"
    },
    {
      "title": "Iron Skies: Airborne Division",
      "description": "Command your fleet in thrilling dogfights above a war-torn Earth.",
      "link": "#",
      "gameUpdateVersion": "2.9.6",
      "gameImage": "images/iron_skies.jpg"
    },
    {
      "title": "Mechfall: Rise of Titans",
      "description": "Battle massive machines in this colossal mech warfare expansion.",
      "link": "#",
      "gameUpdateVersion": "3.1.1",
      "gameImage": "images/mechfall_titans.jpg"
    },
    {
      "title": "Ghost Ops: Phantom Protocol",
      "description": "Go invisible, go silent—tactical infiltration has never been this intense.",
      "link": "#",
      "gameUpdateVersion": "1.7.3",
      "gameImage": "images/ghost_ops.jpg"
    },
    {
      "title": "Aetherstorm: Tempest Unleashed",
      "description": "Harness the elements and alter the skies in a high-stakes aerial adventure.",
      "link": "#",
      "gameUpdateVersion": "3.4.2",
      "gameImage": "images/aetherstorm.jpg"
    },
    {
      "title": "Bioforge: Mutation Protocol",
      "description": "Genetic evolution meets chaos in this high-tech biological warfare update.",
      "link": "#",
      "gameUpdateVersion": "2.3.4",
      "gameImage": "images/bioforge_mutation.jpg"
    },
    {
      "title": "Starborn Legacy: Eclipse Rising",
      "description": "Uncover hidden truths beyond the stars in a narrative-rich space RPG expansion.",
      "link": "#",
      "gameUpdateVersion": "1.9.0",
      "gameImage": "images/starborn_legacy.jpg"
    },
    {
      "title": "Zero Front: Nuclear Dawn",
      "description": "Lead the resistance in a war-torn future after global collapse.",
      "link": "#",
      "gameUpdateVersion": "2.7.1",
      "gameImage": "images/zero_front.jpg"
    },
    // {
    //   "title": "Deep Abyss: Leviathan Wakes",
    //   "description": "Explore the ocean depths and awaken ancient terrors below.",
    //   "link": "#",
    //   "gameUpdateVersion": "1.4.6",
    //   "gameImage": "images/deep_abyss.jpg"
    // },
    // {
    //   "title": "ChronoShatter: Rift Realms",
    //   "description": "Tear through time in this time-bending RPG adventure.",
    //   "link": "#",
    //   "gameUpdateVersion": "2.5.0",
    //   "gameImage": "images/chronoshatter.jpg"
    // },
    // {
    //   "title": "Vanguard Nexus: Core Reboot",
    //   "description": "Restore a lost civilization through ancient tech and forgotten knowledge.",
    //   "link": "#",
    //   "gameUpdateVersion": "3.0.7",
    //   "gameImage": "images/vanguard_nexus.jpg"
    // },
    // {
    //   "title": "Inferna: Hellfire Ascending",
    //   "description": "Battle demons and ascend the ranks of infernal powers.",
    //   "link": "#",
    //   "gameUpdateVersion": "1.3.9",
    //   "gameImage": "images/inferna_hellfire.jpg"
    // },
    // {
    //   "title": "Glacierbound: Edge of Survival",
    //   "description": "Build, scavenge, and survive in a world buried under snow.",
    //   "link": "#",
    //   "gameUpdateVersion": "2.6.6",
    //   "gameImage": "images/glacierbound.jpg"
    // },
    // {
    //   "title": "Moonward: Colony Lost",
    //   "description": "Reclaim Earth's first lunar colony in this sci-fi mystery survival game.",
    //   "link": "#",
    //   "gameUpdateVersion": "1.1.8",
    //   "gameImage": "images/moonward_colony.jpg"
    // },
    // {
    //   "title": "Stormcrafters: Skybound Siege",
    //   "description": "Command flying islands in a magical sky kingdom under siege.",
    //   "link": "#",
    //   "gameUpdateVersion": "2.8.5",
    //   "gameImage": "images/stormcrafters.jpg"
    // },
    // {
    //   "title": "Darkwire: AI Overclocked",
    //   "description": "Break the limits of intelligence in a dystopian network-controlled world.",
    //   "link": "#",
    //   "gameUpdateVersion": "3.3.3",
    //   "gameImage": "images/darkwire_ai.jpg"
    // },
    // {
    //   "title": "Empire Reforged: Ashes to Glory",
    //   "description": "Rebuild your shattered kingdom in this grand strategy update.",
    //   "link": "#",
    //   "gameUpdateVersion": "2.2.8",
    //   "gameImage": "images/empire_reforged.jpg"
    // }
  ];
  
  
  
  const News = () => {
    const [tranding, setTranding] = useState([]);

    useEffect(() => {
      const filtered = newsArticles.filter((item) => item.gameImage);
      setTranding(filtered.slice(0, 5));
    }, []);

      return (
        <>
        <div className='m-5'>
          <div className="flex  mx-auto h-[350vh]">
            <div className='my-5 w-9/12 overflow-y-auto no-scrollbar'>
              {newsArticles.map((article, index) => (
                <div key={index} className="mb-5  border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ">
                  <div className="p-6">
                    <img src={article.gameImage} width='full' alt="" />
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{article.title}</h2>
                    <p className="text-lg text-gray-600 mb-4">{article.description}</p>
                    <a href={article.link} className="text-blue-500 hover:text-blue-700 font-semibold">
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className='w-3/12'>
              <div className='m-6  border-gray-200 rounded-lg  hover:shadow-xl transition-shadow duration-300'>
                <h1 className='text-center text-2xl font-extrabold mx-auto text-gray-600'>TRENDING</h1>
                {tranding.map((item, index) => (
                <div className='flex flex-col md:flex-row m-5' key={index}>
                  <div className='h-1/2 mx-auto bg-[url(https://www.bing.com/th/id/OIP.jr45RWJK1l_DlKaJCCr2RgHaHa?w=194&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2)] bg-cover bg-center w-3/9 mb-5'>
                  <img src={item.gameImage} alt={item.title} width='full' height='full' />
                  </div>
                  <div className='ml-2 w-6/9'>
                  <p className='text-gray-500 text-sm w-full'>11.11.18 / in <a href="#" className='text-gray-600 text-sm'>Games</a></p>
                  <h4 className='font-semibold text-gray-500'>The best online game is out now!</h4>
                </div>
                </div>
                ))}
              </div>

              <div>
                <div className='m-6 border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                  <h1 className='text-center text-2xl font-extrabold mx-auto text-gray-600 w-full'>CATEGORIES</h1>
                  <ul class="list-none m-8">
                    <li class="relative group text-gray-800 hover:text-blue-500 mb-3 cursor-pointer">
                      Games
                      <span class="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all">
                        <MdKeyboardDoubleArrowRight className="text-blue-500" />
                      </span>
                    </li>
                    <li class="relative group text-gray-800 hover:text-blue-500 mb-3 cursor-pointer">
                      Gaming Tips & Tricks
                      <span class="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all">
                        <MdKeyboardDoubleArrowRight className="text-blue-500" />
                      </span>
                    </li>
                    <li class="relative group text-gray-800 hover:text-blue-500 mb-3 cursor-pointer">
                      Online Games
                      <span class="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all">
                        <MdKeyboardDoubleArrowRight className="text-blue-500" />
                      </span>
                    </li>
                    <li class="relative group text-gray-800 hover:text-blue-500 mb-3 cursor-pointer">
                      Team Games
                      <span class="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all">
                        <MdKeyboardDoubleArrowRight className="text-blue-500" />
                      </span>
                    </li>
                    <li class="relative group text-gray-800 hover:text-blue-500 mb-3 cursor-pointer">
                      Community
                      <span class="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all">
                        <MdKeyboardDoubleArrowRight className="text-blue-500" />
                      </span>
                    </li>
                    <li class=" relative group text-gray-800 hover:text-blue-500 mb-3 cursor-pointer">
                      Uncategorized
                      <span class="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all">
                        <MdKeyboardDoubleArrowRight className="text-blue-500" />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <div className='m-6 border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                  <h1 className='text-center text-2xl font-extrabold mx-auto text-gray-600 w-full'>Latest Comments</h1>
                  <div className="flex items-center m-6 gap-[4px] sm:gap-[6px]">
                    <div className="w-20 h-12">
                      <img
                        src="https://th.bing.com/th/id/OIP.S-sz11kWXo5lanv04dzmtwHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                        alt=""
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="w-full">
                        <a href="#" className="text-gray-500 font-medium">Maria Smith</a>
                        <span className="text-gray-400"> on </span>
                        <b className="text-gray-600">The best online game out there</b>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center m-6 gap-[4px] sm:gap-[6px]">
                    <div className="w-20 h-12">
                      <img
                        src="https://tse3.mm.bing.net/th/id/OIP.tk2NipiAVoNIGBFgllrfGQHaHa?pid=ImgDet&w=178&h=178&c=7&dpr=1.5"
                        alt=""
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="w-full">
                        <a href="#" className="text-gray-500 font-medium">Maria Smith</a>
                        <span className="text-gray-400"> on </span>
                        <b className="text-gray-600">The best online game out there</b>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center m-6 gap-[4px] sm:gap-[6px]">
                    <div className="w-20 h-12">
                      <img
                        src="https://tse3.mm.bing.net/th/id/OIP.AwX8cMx6kWMVUOeEJZkZeQHaHa?pid=ImgDet&w=178&h=178&c=7&dpr=1.5"
                        alt=""
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="w-full">
                        <a href="#" className="text-gray-500 font-medium">Maria Smith</a>
                        <span className="text-gray-400"> on </span>
                        <b className="text-gray-600">The best online game out there</b>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center m-6 gap-[4px] sm:gap-[6px]">
                    <div className="w-20 h-12">
                      <img
                        src="https://th.bing.com/th/id/OIP.o2lKADxfH-JCKxtj4xi6NgHaHa?w=187&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                        alt=""
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="w-full">
                        <a href="#" className="text-gray-500 font-medium">Maria Smith</a>
                        <span className="text-gray-400"> on </span>
                        <b className="text-gray-600">The best online game out there</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

                <div className='m-6'>
                  <img src="https://preview.colorlib.com/theme/endgam/img/add.jpg" alt="" />
                </div>

            </div>
          </div>
        </div>
      </>
    );
}

export default News
