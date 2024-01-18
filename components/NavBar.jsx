const React = require("react");

function NavBar({ user }) {
  // console.log(user, 11);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="/">
              Home
            </a>

            {user ? (
              <>
                <a className="nav-link" href="/AddBook">
                  Add Book
                </a>
                <a className="nav-link" href="/favourites">
                  Favorites
                </a>
                <div className="nav__profile">
                  <p>Hello, {user.name}</p>
                  <img className="nav__avatar" src={user.img} alt="" />
                </div>
                <a className="nav-link" href="/api/auth/logout">
                  Logout
                </a>
              </>
            ) : (
              <>
                <a className="nav-link" href="/auth/sign-in">
                  Sign in
                </a>
                <a className="nav-link" href="/auth/sign-up">
                  Sign up
                </a>
                <a className="nav-link" style={{ color: 'black' }}>Hello, Guest!✋</a>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

module.exports = NavBar;
