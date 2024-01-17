const React = require("react");
const Layout = require("./Layout");

function HeroPage({ title, book, user }) {
  return (
    <Layout title={title} user={user}>
      <h1>Hero page</h1>
      <div className="card" style={{ width: "18rem", margin: "20px" }}>
        <img src={book.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{book.name}</h5>
          {/* <p className="card-text">{hero.description}</p> */}
        </div>
      </div>
    </Layout>
  );
}

module.exports = HeroPage;
