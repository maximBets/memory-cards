const React = require('react');
const Layout = require('./Layout');

function ThemesPage({ themes = [] }) {
  return (
    <Layout>
      <div className="themes-container">
        <h1 className="themes-title text-white">Темы</h1>
        <ul className="themes-list d-flex flex-wrap">
          {themes.map((theme) => (
            <li key={theme.id}>
              <div className="card bg-info-subtle" style={{ width: '18rem' }}>
                <div className="card-body">
                  <h5 className="card-title text-white fs-3">{theme.theme_title}</h5>
                  <a href="#" className="btn btn-outline-primary btn-lg fw-bolder">
                    Перейти к изучению
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <script src="/js/themes.js" />
    </Layout>
  );
}

module.exports = ThemesPage;
