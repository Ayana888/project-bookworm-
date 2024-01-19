const signInForm = document.querySelector("#sign-in");
const signUpForm = document.querySelector("#sign-up");
// console.log(signInForm, 22);

if (signInForm) {
  signInForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { name, password  } = e.target;
    // console.log(name.value, password.value, 99);
    const res = await fetch("/api/auth/sign-in", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        password: password.value,
      }),
    });
    //обработка ответа от сервера
    const data = await res.json();
    if (data.message === "success") {
      window.location.assign("/");
    } else {
      alert(data.message);
    }
    // console.log(data, 7777);
    //отправили запрос fetch на сервер и следующий шаг создание api.auth.routes.js
  });
}

if (signUpForm) {
  signUpForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { Name, email,img, password, rpassword } = e.target;
    //console.log(Name.value,email.value,mobile.value, password.value, img.value);
    // console.log(name.value, password.value, img.value, 888);
    const res = await fetch("/api/auth/sign-up", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: Name.value,
        email: email.value,
        password: password.value,
        rpassword: rpassword.value,
        img: img.value,
      }),
    });
    const data = await res.json();

    if (data.message === "success") {
      window.location.assign("/");
    } else {
      alert(data.message);
    }
  });
}
