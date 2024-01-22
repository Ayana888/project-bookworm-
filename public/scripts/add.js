
const addBook = document.querySelector(".add-book");

// console.log(document.cookie);

if (addBook) {
  addBook.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, author, img } = e.target;
    const formData = new FormData();
    formData.append('img', img.files[0]);
    formData.append('name', name.value);
    formData.append('author', author.value);
    //console.log(name.value, author.value, img.value); //все 4 инпута, значение достаем через .value
    const res = await fetch('/api/books', {
      method: 'post',
     body: formData
    });
    const data = await res.json();
    console.log(data, 88888);
    // добавление карточки без перезагрузки
    if (data.message === 'success') {
      document.querySelector('.book-container');
      e.target.reset(); // очитска форма после добавления
      window.location.assign('/');
    } else {
    }
  });
}
