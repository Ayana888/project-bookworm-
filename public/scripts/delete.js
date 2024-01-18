const bookContainer = document.querySelector('.book-container');

if (bookContainer) {
    bookContainer.addEventListener('click', async (e) => {
    if (e.target.classList.contains('delete')) {
      const answer = confirm('Вы точно этого хотите?');
      if (answer) {
          const { id } = e.target.dataset;
          const res = await fetch(`/${id}`, {
              method: 'delete',
            });
            // console.log ('123')
            const data = await res.json();
            console.log(data.message)
            if (data.message === 'success') {
                e.target.closest('.card').remove();
        } else {
          alert(data.message);
        }
      }
    }
  });
}