const updateForm = document.getElementById("update-book");

if (updateForm) {
  updateForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { name, author, img } = e.target;
    const { id } = e.target.dataset;
    const formData = new FormData();
    formData.append('img', img.files[0]);
    formData.append('name', name.value);
    formData.append('author', author.value);
    // console.log(name.value, description.value, film.value, img.value); //все 4 инпута, значение достаем через .value
    const res = await fetch(`/api/books/${id}`, {
      method: "put",
      body: formData,
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
