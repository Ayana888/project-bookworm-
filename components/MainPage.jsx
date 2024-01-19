const React = require("react");
const Layout = require("./Layout");
const BookItem = require("./BookItem");

function MainPage({ title, user, books,rating }) {
  return (
    <Layout title={title} user={user}>
      <div>
        <h1></h1>
        <div className="container book-container">

          
          {books.map((book) => (
            <BookItem key={book.id} book={book} user = {user} rating={rating}/>
          ))}


        </div>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
