import { Card } from '../card/Card';

export const BlockCards = () => {
  return (
    <div className="content__items">
      <Card title='Мексиканская' price={500}/>
      <Card />
      <Card />
    </div>
  );
};
