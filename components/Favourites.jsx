const React = require('react');
const Layout = require('./Layout');
const BookItem = require('./BookItem');

function Favourites({ title, books, user }) {
  console.log(books, user);
  return (
    <Layout user={user} title={title}>
      <h1>Favourites Page</h1>
      <div className="container fav-container" style={{ display: 'flex' }}>
        {books.map((book) => (
          // (book.like.id === user.id)  &&
          <BookItem key={book.id} book={book} user={user} /> 
        ))}
      
        <h1>MY FAV</h1>
      </div>
    </Layout>
  );
}

module.exports = Favourites;
