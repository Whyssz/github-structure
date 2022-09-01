import cl from './MyModal.module.scss';

const MyModal = ({ children }) => {
  return (
    <div className={`${cl.modal} ${cl.active}`}>
      <div className={cl.modalContent}>{children}</div>
    </div>
  );
};

export default MyModal;
