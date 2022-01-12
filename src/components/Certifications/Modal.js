import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Carousel from './Carousel';
import styles from './Modal.module.css';

const Backdrop = props => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = props => {
  if (props.img === '/static/media/softuni_fundamentals_crop.226da285df192ab054ad.jpeg') {
    return (
      <div className={styles.modal}>
        <div className={styles.content}>
          <Carousel />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <img src={props.img} />
      </div>
    </div>
  );
};

const portalElement = document.getElementById('overlay');

const Modal = props => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay img={props.img}></ModalOverlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;
