const React = require("react");
const Rate = require("./Rate");


function BookItem({ book, user }) {

  return (
    <div className="boxmm" data-id={book.id}>
      <div className="card" style={{ width: "18rem;" }}>
        <img src={book.img} className="card-img-top" alt={book.name} />
        <div className="card-body">
          <h5 className="card-title">{book.name}</h5>
          <p className="card-text">{book.author}</p>


          <a href={`/books/${book.id}`} className="btn btn-primary">
            Подробнее
          </a>
          {user && (
            <div>
              {book.Likes ? (
                <button
                  data-id={book.id}
                  className="btn btn-success dfavorite"
                  type="button"
                >
                  Удалить из избранного 💔
                </button>
              ) : (
                <button
                  data-id={book.id}
                  className="btn btn-success favorite"
                  type="button"
                >
                  В избранное ❤️
                </button>
              )}


              {user.id === book.user_id && (
                <>
                  <button
                    data-id={book.id}
                    className="btn btn-danger delete"
                    type="button"
                  >
                    Удалить
                  </button>
                  <a
                    href={`/books/update-form/${book.id}`}
                    className="btn btn-warning update"
                    type="button"
                  >
                    Изменить
                  </a>
        <Rate user={user} book={book} children={children}/>
                  
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

        

}


module.exports = BookItem;
