const React = require("react");
const Layout = require("./Layout");
const BookComment = require("./BookComment");

function BookPage({ title, book, user, coments }) {
  return (
    <Layout title={title} user={user}>
      <div
        className="carddd"
        data-id={book.id}
        style={{ width: "18rem", margin: "20px" }}
      >
        <img src={book.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{book.name}</h5>
          <h5 className="card-title">{book.author}</h5>
          {user && (
            <form className="add-comment">
              <div className="mb-3">
                <input type="text" name="text" className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary comment">
                Отправить комментарий
              </button>
            </form>
          )}

          <div className="comment-coc">
            {coments.map((comment) => (
              <BookComment comment={comment} key={comment.id} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = BookPage;
