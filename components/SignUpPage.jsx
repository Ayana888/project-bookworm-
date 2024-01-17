const React = require("react");
const Layout = require("./Layout");

function SignUpPage() {
  return (
    <Layout>
      <div className="container">
        <form id="sign-up">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              name="Name"
              type="text"
              autoComplete="username"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              name="email"
              type="text"
              autoComplete="username"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">
              Mobile
            </label>
            <input
              name="mobile"
              type="text"
              autoComplete="username"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="img" className="form-label">
              Image
            </label>
            <input name="img" type="text" className="form-control" id="img" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              autoComplete="current-password"
              className="form-control"
              id="password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="rpassword" className="form-label">
              Repeat Password
            </label>
            <input
              name="rpassword"
              type="text"
              autoComplete="username"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = SignUpPage;
