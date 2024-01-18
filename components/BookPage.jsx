const React = require("react");
const Layout = require("./Layout");

function BookPage({ title, book, user }) {
  return (
    <Layout title={title} user={user}>
      <h1>Book page</h1>
      <div className="card" style={{ width: "18rem", margin: "20px" }}>
        <img src={book.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{book.name}</h5>
        </div>
      </div>
    </Layout>
  );
}

module.exports = BookPage;
