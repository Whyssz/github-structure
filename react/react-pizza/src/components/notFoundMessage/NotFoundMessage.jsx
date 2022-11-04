import styles from './notFoundMessage.module.scss';

export const NotFoundMessage = () => {
  return (
    <div className={styles.nf_wrapper}>
      <h1>
        <span>🤔</span>
        <br />
        Ничего не найдено
      </h1>
      <p>К сожалению данныя страница отсутствует в нашем интернет-магазине</p>
    </div>
  );
};
