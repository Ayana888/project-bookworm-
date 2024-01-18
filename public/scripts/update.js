const updateForm = document.getElementById("update-book");

if (updateForm) {
  updateForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { name, author, img } = e.target;
    const { id } = e.target.dataset;
    // console.log(name.value, description.value, film.value, img.value); //все 4 инпута, значение достаем через .value
    const res = await fetch(`/api/books/${id}`, {
      method: "put",
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
    const data = await res.json(); // парсим
    // console.log(data, 88888);
    // добавление карточки без перезагрузки
    if (data.message === "success") {
      window.location.assign("/"); // переадресация на главную страницу с героями
    } else {
      alert(data.message);
    }
  });
}
