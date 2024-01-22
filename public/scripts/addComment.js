const addComment = document.querySelector(".add-comment");
const box = document.querySelector(".carddd");

if (addComment) {
  addComment.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { id } = box.dataset
    const { text } = e.target;
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
    if (data.message === "success") {
      const bookComment = document.querySelector('.commContainer'); //ЕСЛИ НЕТ ЕЩЕ НИ ОДНОГО КОММЕНТА - ТО НЕТ ТАКОГО СЕЛЕКТОРА, КАК У ДИВОВ ДЛЯ КОММЕНТОВ
      //  ПЕРЕИМЕНОВАЛА ОБЩИЙ КОНТЕЙНЕР ДЛЯ КОММЕНТОВ И ВСЕ ЗАРАБОТАЛО
      bookComment.insertAdjacentHTML('afterbegin', data.html)
      e.target.reset(); // очитска форма после добавления
      // window.location.assign('/')
    } else {  alert(data.message);
    }
  });
}
