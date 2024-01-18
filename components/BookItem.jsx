const React = require("react");

function BookItem ({books}){
    return(
        <div style={{display:'flex', paddingRight:'90px'}}>
<div className="card" style={{width: "18rem;"}}>
  <img src={books.img} className="card-img-top" alt={books.name} />
  <div className="card-body">
    <h5 className="card-title">{books.name}</h5>
    <p className="card-text">{books.author}</p>
    <a href={`/books/${books.id}`} className="btn btn-primary">Подробнее</a>
    <button data-id={books.id}  className="btn btn-danger delete" type="button">Удалить</button>
  </div>
</div>
</div>
    )

    
}

module.exports = BookItem