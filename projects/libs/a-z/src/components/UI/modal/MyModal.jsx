import { useEffect } from 'react';
import cl from './MyModal.module.scss';

const MyModal = ({ children, visible, setVisible }) => {
  const classes = [cl.modal];

  if (visible) {
    classes.push(cl.active);
  }

  const keyDownHandler = (e) => {
    if (e.key === 'Escape') {
      setVisible(false);
    }
  };

  useEffect(() => {
    //onKeyDown will not work correctly in this case
    if (visible) {
      document.addEventListener('keydown', keyDownHandler);
      return () => {
        document.removeEventListener('keydown', keyDownHandler);
      };
    }
  }, [visible]);

  return (
    <div onClick={() => setVisible(false)} className={classes.join(' ')}>
      <div onClick={(e) => e.stopPropagation()} className={cl.modalContent}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
