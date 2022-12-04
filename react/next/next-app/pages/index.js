// import styles from '../styles/Home.module.css';

import { Meta } from './app/utils/Meta';
import Card from './card/[id]';

export default function Home({ cards }) {
  return (
    <div>
      <Meta title="Главная страница" description="Главная информация" />
      <main style={{ textAlign: 'center' }}>
        <h1>Hello</h1>
        {cards.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/cards');
  const cards = await response.json();

  return {
    props: {
      cards,
    },
    revalidate: 10,
  };
};
