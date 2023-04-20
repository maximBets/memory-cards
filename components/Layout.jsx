const React = require('react');
const MainPage = require('./Main');

function Layout({ children, user }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <title>English words</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <MainPage />
        <header>
          <ul className="nav justify-content-end">
            {user ? (
              <>
                <li className="nav-item">Привет, {user.login}!</li>
                <li className="nav-item">выход</li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </header>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}

module.exports = Layout;
