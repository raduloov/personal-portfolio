import React, { useState } from 'react';

import CertContainer from './components/Certifications/CertContainer';
import Modal from './components/Certifications/Modal';
import MainContainer from './components/MainContainer/MainContainer';
import PortfolioContainer from './components/PortfolioContainer/PortfolioContainer';
import Navbar from './components/MainContainer/Navbar';
import Footer from './components/UI/Footer';

const state = {
  certificate: null
};

function App() {
  const [modalIsShown, setModalIsShown] = useState(false);

  const openModal = certificate => {
    setModalIsShown(true);
    state.certificate = certificate;
    console.log(certificate);
  };

  const closeModal = () => {
    setModalIsShown(false);
  };

  return (
    <React.Fragment>
      {modalIsShown && <Modal onClose={closeModal} img={state.certificate} />}
      <Navbar />
      <MainContainer />
      <PortfolioContainer />
      <CertContainer onClick={openModal} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
