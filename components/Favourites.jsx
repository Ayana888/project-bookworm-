const React = require('react');
const Layout = require('./Layout');
//const HeroItem = require('./HeroItem');

function Favourites({ title, books, user }) {
  return (
    <Layout user={user} title={title}>
      <h1>Favourites Page</h1>
      <div className="container fav-container" style={{ display: 'flex' }}>
        {/* {books.map((book) => (
          <BookItem key={book.id} book={book} user={user} />
        ))} */}
        <h1>MY FAV</h1>
      </div>
    </Layout>
  );
}

module.exports = Favourites;
