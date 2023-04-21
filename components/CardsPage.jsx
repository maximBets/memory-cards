const React = require('react');
const Layout = require('./Layout');

function CardsPage({ cards = [], user }) {
  const learned = false;
  return (
    <Layout user={user}>
      <div className="container">
        <ul className="themes-list d-flex flex-wrap">
          {cards.map((card) => (
            <li key={card.id}>
              {/* <div className="card card-container bg-info-subtle" style={{ width: '18rem' }}> */}
              {/* <div className="card-body">
                <h5 className="card-title text-white fs-3">{card.eng_word}</h5>
                <h5 className="card-title text-white fs-3">{card.rus_word}</h5> */}
              {/* Кнопку обрабатывать с помощью тернарного оператора на основании свойства learned*/}
              {/* {learned ? (
                  <button type="button" className="btn btn-outline-primary btn-lg fw-bolder">
                    Изучено
                  </button>
                ) : (
                  <button type="button" className="btn btn-outline-primary btn-lg fw-bolder">
                    Добавить на изучение
                  </button>
                )}
              </div> */}
              <div className=" flip-card js-toggleWrapper" tabIndex="-1" style={{ width: '18rem' }}>
                <div className="flip-card__front">
                  <h2 className="flip-card__content">{card.eng_word}</h2>
                </div>
                <button type="button" className="flip-card__button js-toggleButton" data-aria-controls="card-back-1">
                  <span className="screen-reader-text" />
                </button>
                <div id="card-back-1" className="flip-card__back">
                  <h2 className="flip-card__content">{card.rus_word}</h2>
                </div>
              </div>
              {/* </div> */}
              {learned ? (
                <button type="button" className="btn btn-outline-primary btn-lg fw-bolder">
                  Изучено
                </button>
              ) : (
                <button type="button" data-card-id={card.id} className="btn-add-to-learn btn btn-outline-primary btn-lg fw-bolder">
                  Добавить на изучение
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>

      <script src="/js/cards.js" />
    </Layout>
  );
}

module.exports = CardsPage;

<div className="flip-card js-toggleWrapper" tabIndex="-1">
  <div className="flip-card__front">
    <h2 className="flip-card__content">What will we talk about?</h2>
  </div>
  <button type="button" className="flip-card__button js-toggleButton" data-aria-controls="card-back-1">
    <span className="screen-reader-text">Show More</span>
  </button>
  <div id="card-back-1" className="flip-card__back">
    <div className="flip-card__content">
      <p>We can talk about:</p>
      <ul>
        <li>Child's Routine</li>
        <li>Child's Likes & Dislikes</li>
        <li>Family Traditions & Cultures</li>
        <li>Communication</li>
      </ul>
    </div>
  </div>
</div>;
