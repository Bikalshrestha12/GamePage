import logo from './logo.png'
import snake from './snake.webp'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
// import about_img from './about_img.png'
// import contact_img from './contact_img.png'
// import razorpay_logo from './razorpay_logo.png'
// import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

import blackboard_game from './blackboard_game.jpeg';
import cool_game from './cool_game.jpeg';
import news_game from './news_game.jpeg';
import ninja_game from './ninja_game.jpeg';
import sinema_game from './sinema_game.png';
import space_game from './space_game.jpeg';


export const assets = {
    logo,
    snake,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    // about_img,
    // contact_img,
    // razorpay_logo,
    // stripe_logo,
    cross_icon
}


export const games =[
    {
        _id:'GM-0001',
        name:"BlackBoard",
        description: "The Blackboard Quiz Generator is a free online tool that will convert questions from a word processing (text) file to a format that can be imported into Blackboard.",
        image:[blackboard_game],
        category: 'quiz',
        // subcategory: 'quiz',
        lavels: ['easy', 'medium', 'hard'],
        Date: 1716634345448,
        price: 200,
        online:true,
        paid: false
    },
    {
        _id:'GM-0002',
        name:"Cool Game",
        description: "Quiz games challenge players' knowledge and thinking skills across a variety of subjects.",
        image:[cool_game],
        category: 'quiz',
        // subcategory: 'quiz',
        lavels: ['easy', 'medium', 'hard'],
        Date: 1716634345448,
        price: 10,
        online:true,
        paid: false
    },
    {
        _id:'GM-0003',
        name:"Ninja Game",
        description: "Ninja Quiz is a free Android game developed by ShayznDev that tests your knowledge of Ninjago characters. The game features over 100 difficulty levels, each with a picture of a character from the popular animated series.",
        image:[ninja_game],
        category: 'quiz',
        // subcategory: 'quiz',
        lavels: ['easy', 'medium', 'hard'],
        Date: 1716634345448,
        price: 0,
        online:true,
        paid: true
    },
    {
        _id:'GM-0004',
        name:"News Game",
        description: "The Weekly News Quiz Game features 99 questions every week designed to challenge students and encourage their active participation in the classroom.",
        image:[news_game],
        category: 'quiz',
        // subcategory: 'quiz',
        lavels: ['easy', 'medium', 'hard'],
        Date: 1716634345448,
        price: 0,
        online:false,
        paid: true
    },
    {
        _id:'GM-0005',
        name:"Sinema Game",
        description: "Safety starts with understanding how developers collect and share your data. Data privacy and security practices may vary based on your use, region, and age. The developer provided this information and may update it over time.",
        image:[sinema_game],
        category: 'quiz',
        // subcategory: 'quiz',
        lavels: ['easy', 'medium', 'hard'],
        Date: 1716634345448,
        price: 5,
        online:false,
        paid: false
    },
    {
        _id:'GM-0006',
        name:"Space Game",
        description: "Test your astronomy skills with our astronomy and space-related quizzes.",
        image:[space_game],
        category: 'quiz',
        // subcategory: 'quiz',
        lavels: ['easy', 'medium', 'hard'],
        Date: 1716634345448,
        price: 0,
        online:false,
        paid: true
    }
]