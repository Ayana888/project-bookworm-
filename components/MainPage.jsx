const React = require("react");
const Layout = require("./Layout");
const BookItem = require("./BookItem");

function MainPage({ title, user, book }) {
  return (
    <Layout title={title} user={user}>
      <div>
        <h1></h1>
        <div className="container book-container">
          {book.map((books) => (
            <BookItem key={books.id} book={books} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
