const React = require("react");
const Layout = require("./Layout");
const BookItem = require("./BookItem");

function MainPage({ title, user, books }) {
  return (
    <Layout title={title} user={user}>
      <div>
        <h1></h1>
        <div className="container book-container">

          
          {books.map((book) => (
            <BookItem key={book.id} book={book} user = {user} />
          ))}


        </div>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
