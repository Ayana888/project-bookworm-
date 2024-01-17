const React = require("react");
const Layout = require("./Layout");
const BookItem = require("./BookItem");

function MainPage({ title, user, book }) {
  return (
    <Layout title={title} user={user}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h1></h1>
        <div className="container book-container" style={{display:'flex', justifyContent:'center'}}>
        {book.map((books) => (
          <BookItem key={books.id} book={books} />
          
        ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
