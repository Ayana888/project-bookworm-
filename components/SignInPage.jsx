const React = require("react");
const Layout = require("./Layout");

function SignInPage() {
  return (
    <Layout>
      <div className="containerIn">
        <form id="sign-in">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              autoComplete="section-blue shipping postal-code"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              autoComplete="section-blue shipping postal-code"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Авторизироваться
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = SignInPage;
