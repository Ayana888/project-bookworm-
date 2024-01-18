const React = require('react');
const Rate = require('./Rate');


function BookItem({ book, user }) {
  //console.log(book);
  const [like] = book.Likes.filter((el)=>el.user_id === user.id);

  return (
    <div style={{ display: "flex", paddingRight: "90px" }}>
      <div className="card" style={{ width: "18rem;" }}>
        <img src={book.img} className="card-img-top" alt={book.name} />
        <div className="card-body">
          <h5 className="card-title">{book.name}</h5>
          <p className="card-text">{book.author}</p>
        
 <a href={`/books/${book.id}`} className="btn btn-primary">Подробнее</a>

        {like ? (
          <button data-id={book.id} className="btn btn-success dfavorite" type="button">
            Удалить из избранного
          </button>
        ) : (
          <button data-id={book.id} className="btn btn-success favorite" type="button">
            В избранное
          </button>
        )}
         
    <button data-id={book.id}  className="btn btn-danger delete" type="button">Удалить</button>
        <a href={`/heroes/update-form/${book.id}`} className="btn btn-warning update" type="button">
             Изменить
        </a> 

        </div>
      </div>
    </div>
  );


module.exports = BookItem;
