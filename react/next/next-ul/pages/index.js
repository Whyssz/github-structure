import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <div className="navbar">
        <Link legacyBehavior href="/">
          <a className="link">Главная</a>
        </Link>
        <Link legacyBehavior href="/users">
          <a className="link">Пользователи</a>
        </Link>
      </div>
      <h1>Главная страница</h1>
      <style jsx>{`
        .navbar {
          background-color: #d68e0b;
          padding: 15px;
        }
        .link {
          color: white;
          text-decoration: none;
          margin: 0 10px;
          font-weight: bold;
          font-size: 20px;
        }
      `}</style>
    </div>
  );
};
export default Index;
