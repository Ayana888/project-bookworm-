const bookContainerLike = document.querySelector('.book-container');
const favContainerLike = document.querySelector('.fav-container');

favContainerLike?.addEventListener('click', async (e) => { 
  if (e.target.classList.contains('dfavorite')) {
    const { id } = e.target.dataset;
    const res = await fetch(`/api/favorites/${id}`, {
      method: 'delete',
    });
    const data = await res.json();
    if (data.message === 'success') {
      e.target.innerText = 'В избранное';
      e.target.classList.add('favorite');
      e.target.classList.remove('dfavorite');
      e.target.closest('.card').remove();
    } else {
      alert(data.message);
    }
    return;
  }
});

bookContainerLike?.addEventListener('click', async (e) => {
  if (e.target.classList.contains('favorite')) {
    const { id } = e.target.dataset;
    const res = await fetch(`/api/favorites`, {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    const data = await res.json();
    if (data.message === 'success') {
      e.target.innerText = 'Удалить из избранного';
      e.target.classList.add('dfavorite');
      e.target.classList.remove('favorite');
    } else {
      alert(data.message);
    }
    return;
  }
  if (e.target.classList.contains('dfavorite')) {
    const { id } = e.target.dataset;
    const res = await fetch(`/api/favorites/${id}`, {
      method: 'delete',
    });
    const data = await res.json();
    if (data.message === 'success') {
      e.target.innerText = 'В избранное';
      e.target.classList.add('favorite');
      e.target.classList.remove('dfavorite');
    } else {
      alert(data.message);
    }
    return;
  }
});



