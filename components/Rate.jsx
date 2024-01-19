const React = require('react');

 function Rate({ user, book, children }) {
    let middlerating;
    // if (route.Ratings.length === 0) {
    //   middlerating = 0;
    // } else {
    //   middlerating =
    //     route.Ratings.reduce((a, b) => a + b.rating, 0) / route.Ratings.length;
    // }
    return (
      <form
        className="rating-form"
        data-id={book.id}
        action={`${book.id}/rating`}
      >
        <div className="ratingStar rating-set">
          <div className="rating_body">
            <div className="rating_active"></div>
            <div className="rating_items">
              <input
                type="radio"
                className="rating_item"
                name="rating"
                value="1"
              />
              <label title="Оценка «1»"></label>
              <input
                type="radio"
                className="rating_item"
                name="rating"
                value="2"
              />
              <label title="Оценка «2»"></label>
              <input
                type="radio"
                className="rating_item"
                name="rating"
                value="3"
              />
              <label title="Оценка «3»"></label>
              <input
                type="radio"
                className="rating_item"
                name="rating"
                value="4"
              />
              <label title="Оценка «4»"></label>
              <input
                type="radio"
                className="rating_item"
                name="rating"
                value="5"
              />
              <label title="Оценка «5»"></label>
            </div>
          </div>
          {/* <div className="rating_value"></div> */}
          <div>{children}</div>
        </div>
      </form>
    );
  };
  module.exports = Rate
  
