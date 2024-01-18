const addBook = document.querySelector(".add-book");
console.log(addBook, 222);
// console.log(document.cookie);

if (addBook) {
  addBook.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { name, author, img } = e.target;
    console.log( name.value, author.value, img.value); //все 4 инпута, значение достаем через .value
    const res = await fetch("/api/books", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      //body это тот объект, который хотим отправить на сервер//создание новой карточки
      body: JSON.stringify({
        name: name.value,
        author: author.value,
        img: img.value,
      }),
    });
    const data = await res.json();
    // console.log(data, 88888);
    // добавление карточки без перезагрузки
    if (data.message === "success") {
      document
        .querySelector(".book-container")
      e.target.reset(); // очитска форма после добавления
      window.location.assign('/')
    } else {
    }
  });
}
