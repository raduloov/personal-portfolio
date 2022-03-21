import weather from '../../assets/thumb/weather.png';
import calc from '../../assets/thumb/calc.png';
import crypto from '../../assets/thumb/crypto.png';
import quiz from '../../assets/thumb/quiz.png';
import notes from '../../assets/thumb/notes.png';
import pseudo from '../../assets/thumb/pseudo.png';
import bulbup from '../../assets/thumb/bulbup.png';
import chatFirebase from '../../assets/thumb/chat-firebase.png';
import rnMovies from '../../assets/thumb/rn-movies.png';

const data = [
  {
    imageUrl: rnMovies,
    title: 'React Native Movies App',
    date: '21.03.2022',
    description:
      'My first mobile application [iOS + Android]. Browse movies, watch trailers and add the best to your favorites. Built using React Native and Firebase, written in TypeScript.',
    demoUrl: null,
    gitUrl: 'https://github.com/raduloov/react-native-movies-app'
  },
  {
    imageUrl: chatFirebase,
    title: 'Chat App with Firebase',
    date: '12.03.2022',
    description:
      'Real time messaging app, built with React and Chakra UI for the front-end and Firebase Firestore for the back-end. Written in TypeScript.',
    demoUrl: 'https://chat-app--firebase.vercel.app/',
    gitUrl: 'https://github.com/raduloov/chat-app-firebase'
  },
  {
    imageUrl: bulbup,
    title: 'Bulb Up! Forum',
    date: '20.02.2022',
    description:
      'Log in to share your ideas or ask questions, give feedback or answer others, or give a post a bulb. Bulb-Up is built using React and Tailwind for the front-end and Firebase for the back-end database. Written in TypeScript.',
    demoUrl: 'https://bulb-up.netlify.app/',
    gitUrl: 'https://github.com/raduloov/bulb-up-forum'
  },
  {
    imageUrl: pseudo,
    title: 'Pseudo Shop',
    date: '24.01.2022',
    description:
      'Web store app with dummy products, built with React, Redux and Tailwind. Connected to a backend database using Firebase. Cart items saved to and loaded from Local Storage',
    demoUrl: 'https://pseudo-shop.netlify.app/',
    gitUrl: 'https://github.com/raduloov/pseudo-shop'
  },
  {
    imageUrl: notes,
    title: 'Take-a-Note',
    date: '16.01.2022',
    description:
      'Write and keep track of notes with custom colors and dates, saved to your local storage',
    demoUrl: 'https://take-some-notes.netlify.app/',
    gitUrl: 'https://github.com/raduloov/take-a-note'
  },
  {
    imageUrl: weather,
    title: 'Weather App',
    date: '15.12.2021',
    description:
      'Get weather information in real time for your current location or a manually typed one',
    demoUrl: 'https://weatherfy-app.netlify.app/',
    gitUrl: 'https://github.com/raduloov/weather-app'
  },
  {
    imageUrl: calc,
    title: 'Calculator',
    date: '08.12.2021',
    description: 'Simple JavaScript calculator',
    demoUrl: 'https://basic-calcc.netlify.app/',
    gitUrl: 'https://github.com/raduloov/calculator'
  },
  {
    imageUrl: crypto,
    title: 'Crypto Markets',
    date: '07.12.2021',
    description: 'Crypto prices and market cap in real time',
    demoUrl: 'https://crypto-marketss.netlify.app/',
    gitUrl: 'https://github.com/raduloov/crypto-markets'
  },
  {
    imageUrl: quiz,
    title: 'Quiz Game',
    date: '01.12.2021',
    description: 'Simple quiz game with difficulties, sounds and fluid UI',
    demoUrl: 'https://the-quiz-game.netlify.app',
    gitUrl: 'https://github.com/raduloov/quiz-game'
  }
];

export default data;
