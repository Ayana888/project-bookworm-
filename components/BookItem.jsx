const React = require('react');
const Rate = require('./Rate');

function BookItem({ book, user, children, route }) {
  return (
    <div style={{ display: 'flex', paddingRight: '90px' }}>
      <div className='card' style={{ width: '18rem;' }}>
        <img src={book.img} className='card-img-top' alt={book.name} />
        <div className='card-body'>
          <h5 className='card-title'>{book.name}</h5>
          <p className='card-text'>{book.author}</p>
          <a href='#' className='btn btn-primary'>
            Подробнее
          </a>
          {/* <Rate user={user} children={children} route={route} /> */}
        </div>
      </div>
    </div>
  );
}

module.exports = BookItem;
