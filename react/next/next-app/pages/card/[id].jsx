import Link from 'next/link';
import { Meta } from '../app/utils/Meta';

const Card = ({ card }) => {
  return (
    <>
      <Meta
        title={`Карточка ${card._id.at()}`}
        description="Информация о карточке"
      />
      <Link legacyBehavior href={`/card/${card._id}`}>
        <a
          style={{
            display: 'block',
            padding: 10,
            textAlign: 'center',
            border: '1px solid #e4e4e4',
          }}
        >
          <h1>Card {card._id.at()}</h1>
          <h3>{card.number}</h3>
          <h3>
            Balance:{' '}
            {card.balance.toLocaleString('ru-RU', {
              currency: 'RUB',
              style: 'currency',
            })}
          </h3>
        </a>
      </Link>
    </>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch('http://localhost:3000/api/cards');
  const cards = await response.json();

  const paths = cards.map((c) => ({ params: { id: c._id } }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const response = await fetch(`http://localhost:3000/api/cards/${params.id}`);
  const card = await response.json();

  return {
    props: {
      card,
    },
    revalidate: 10,
  };
};

export default Card;
