const React = require("react");
const Layout = require("./Layout");
const BookItem = require("./BookItem");

function Favourites({ title, booksWithMyLikes, user }) {
  return (
    <Layout user={user} title={title}>
      <h1 className="favbooks">My favorite books 📖</h1>
      <div
        className="container book-container fav-container"
        style={{ display: "flex" }}
      >
        {booksWithMyLikes.map((book) => (
          <BookItem key={book.id} book={book} user={user} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = Favourites;
