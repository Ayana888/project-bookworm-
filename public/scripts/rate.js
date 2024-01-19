const ratings = document.querySelectorAll('.ratingStar');
if (ratings.length > 0) {
  initRatings();
}

function initRatings() {
  let ratingActive;
  let ratingValue;

  ratings.forEach((el) => {
    const rating = el;
    initRating(rating);
  });

  function initRating(rating) {
    initRatingVars(rating);
    setRatingActiveWidht();

    if (rating.classList.contains('rating-set')) {
      setRating(rating);
    }
  }
  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating_active');
    ratingValue = rating.querySelector('.rating_value');
  }

  function setRatingActiveWidht(index = ratingValue.innerHTML) {
    const ratingActiveWidht = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidht}%`;
  }

  function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.rating_item');
    for (let index = 0; index < ratingItems.length; index++) {
      const ratingItem = ratingItems[index];
      ratingItem.addEventListener('mouseenter', function (e) {
        initRatingVars(rating);
        setRatingActiveWidht(ratingItem.value);
      });
      ratingItem.addEventListener('mouseleave', function (e) {
        setRatingActiveWidht();
      });
      ratingItem.addEventListener('click', function (e) {
        initRatingVars(rating);
        setRatingActiveWidht(ratingItem.value);
        if (rating.dataset.ajax) {
          setRatingValue(ratingItem.value, rating);
        } else {
          ratingValue.innerHTML = index + 1;
        }
      });
    }
  }
}

const divRatings = document.querySelectorAll('.rating_items');
divRatings.forEach((divRating) => {
  addRating(divRating);
});

function addRating(divRating) {
  divRating.addEventListener('click', async (event) => {
    const bookID = divRating.dataset.id;
    const ratingValue = event.target.value;
    try {
      const { rating } = event.target;
      const res = await fetch(`/api/rating/${bookID}`, {
        method: 'POST',
        body: JSON.stringify({
          rating: Number(ratingValue),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        ratingForm.insertAdjacentHTML('afterbegin', data.trueHtml);
      }
    } catch (error) {
      console.log(error);
    }
  });
}

// const elem = event.target;
//   console.log(elem);
//   if (elem.classList.contains("rating-form")){
//     console.log(elem);
//     elem.addEventListener("submit", async(event) =>{
//       event.preventDefault();
//       const { id } = ratingForm.dataset;
//       console.log(id);
//       try {
//         const { rating } = event.target;
//         const res = await fetch(`/api/routes/${id}/rating`, {
//           method: 'POST',
//           body: JSON.stringify({
//             rating: Number(rating.value),
//           }),
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
//         const data = await res.json();
//         console.log(data);
//         const True = document.querySelector('.js-true');
//         if (True) {
//           True.remove();
//         }
//         if (data.success === false) {
//           ratingForm.insertAdjacentHTML('afterbegin', data.trueHtml);
//         }
//       } catch (error) {
//         console.log(error);
//       }

//     })

// }
