const addComment = document.querySelector(".add-comment");
const box = document.querySelector(".carddd");

if (addComment) {
  addComment.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { id } = box.dataset
    const { text } = e.target;
    console.log(text.value);
    const res = await fetch("/api/books/:bookId", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      //body это тот объект, который хотим отправить на сервер//создание новой карточки
      body: JSON.stringify({
         text: text.value,
         book_id: id
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.message === "success") {
      console.log(data);
      const bookComment = document.querySelector(".comment_coc20");
      bookComment.insertAdjacentHTML('afterbegin', data.html)

      e.target.reset(); // очитска форма после добавления
      // window.location.assign('/')
    } else {
    }
  });
}
