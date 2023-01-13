import weather from '../../assets/thumb/weather.png';
import calc from '../../assets/thumb/calc.png';
import pseudo from '../../assets/thumb/pseudo.png';
import bulbup from '../../assets/thumb/bulbup.png';
import chatFirebase from '../../assets/thumb/chat-firebase.png';
import rnMovies from '../../assets/thumb/rn-movies.png';
import rnPseudo from '../../assets/thumb/rn-pseudo.png';
import fsBooks from '../../assets/thumb/fs-books.png';
import yummies from '../../assets/thumb/yummies.png';
import cathub from '../../assets/thumb/cathub.png';

const data = [
  {
    imageUrl: cathub,
    title: 'CatHub - Android',
    date: '16.12.2022',
    description:
      'CatHub is a very simple native Android app for browsing cats. Built using Jetpack Compose and Kotlin.',
    demoUrl: null,
    gitUrl: 'https://github.com/raduloov/cathub-android'
  },
  {
    imageUrl: yummies,
    title: 'Yummies - iOS',
    date: '18.08.2022',
    description:
      'Yummies is my first attempt at building a native iOS app using Swift and SwiftUI. A recipe browser where you can pin your favorites ones. Powered by Edamam Recipe Search API.',
    demoUrl: null,
    gitUrl: 'https://github.com/raduloov/yummies-ios'
  },
  {
    imageUrl: fsBooks,
    title: 'Fullstack Books',
    date: '06.06.2022',
    description:
      'Fullstack Books is my first attempt at building a fullstack MERN application. An online book library where you can browse books with the help of the Google Books API, create an account and save them to "Favorites" and "To Read" lists. The front-end is written in TypeScript and the server in JavaScript.',
    demoUrl: 'http://fullstack-books.vercel.app/',
    gitUrl: 'https://github.com/raduloov/fullstack-books'
  },
  {
    imageUrl: rnPseudo,
    title: 'React Native Pseudo Shop',
    date: '11.04.2022',
    description:
      'Pseudo Shop (one of my earlier projects) reimagined as a native mobile application.',
    demoUrl: null,
    gitUrl: 'https://github.com/raduloov/react-native-pseudo-shop'
  },
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
  }
];

export default data;
