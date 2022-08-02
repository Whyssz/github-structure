import Images from '../../img/img.js';

import './main-page.scss';

const dataItems = [
  { label: 'Solimo Coffee Beans 2 kg', price: 6, images: 'dish1' },
  { label: 'Presto Coffee Beans 1 kg', price: 10.4, images: 'dish2' },
  { label: 'AROMISTICO Coffee 1 kg', price: 15.99, images: 'dish33' },
];

const listItems = dataItems.map(({ label, price, images }) => {
  return (
    <a href='#' key={label} className="best-item">
      <img src={Images[images]} alt="preview-item" />
      <h3 className="best-item__title">{`${label}`}</h3>
      <span>{`${price}$`}</span>
    </a>
  );
});

const MainPage = () => {
  return (
    <article>
      <header className="main-page__header">
        <nav className="nav-bar title-menu">
          <ul className="nav-var__list">
            <li className="first-element__menu">
              <a href="#">
                Coffee house
                <i></i>
              </a>
            </li>
            <li>
              <a href="#">Our coffee</a>
            </li>
            <li>
              <a href="#">For yourpleasuer</a>
            </li>
          </ul>
        </nav>
        <article className="header-box__title container">
          <h1>Everything You Love About Coffee</h1>
          <span className="span-logo">
            <img src="#" alt="logo-brand" />
          </span>
          <h2>We makes every day full of energy and taste</h2>
          <h2>Want to try our beans?</h2>
          <a className="btn btn-more" href="#">
            More
          </a>
        </article>
      </header>
      <main className="main-content">
        <section className="about">
          <article className="container">
            <article className="about__box">
              <h2>About Us</h2>
              <span className="span-logo balck-icon">
                <img src="#" alt="logo-brand" />
              </span>
              <aside className="about__box-text">
                <p>
                  Extremity sweetness difficult behaviour he of. On disposal of
                  as landlord horrible. Afraid at highly months do things on at.
                  Situation recommend objection do intention so questions. As
                  greatly removed calling pleased improve an. Last ask him cold
                  feel met spot shy want. Children me laughing we prospect
                  answered followed. At it went is song that held help face.
                </p>
                <p>
                  Now residence dashwoods she excellent you. Shade being under
                  his bed her, Much read on as draw. Blessing for ignorant
                  exercise any yourself unpacked. Pleasant horrible but confined
                  day end marriage. Eagerness furniture set preserved far
                  recommend. Did even but nor are most gave hope. Secure active
                  living depend son repair day ladies now.
                </p>
              </aside>
            </article>
          </article>
        </section>
        <section className="best-choise">
          <article className="best-choise__inner container">
            <article className="best-choise__block">
              <h2>Our best</h2>
              <article className="best-choise__content">{listItems}</article>
            </article>
          </article>
        </section>
      </main>
      <footer className="main-footer">
        <article className="footer-menu container">
          <article className="footer-menu__wrap">
            <nav className="nav-bar menu-in">
              <ul className="nav-var__list">
                <li className="first-element__menu">
                  <a href="#">
                    Coffee house
                    <i></i>
                  </a>
                </li>
                <li>
                  <a href="#">Our coffee</a>
                </li>
                <li>
                  <a href="#">For yourpleasuer</a>
                </li>
              </ul>
            </nav>
            <span className="span-logo balck-icon">
              <img src="#" alt="logo-brand" />
            </span>
          </article>
        </article>
      </footer>
    </article>
  );
};

export default MainPage;
