// 1. Primeiro request
const getData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
      // 3. Definindo headers
      {
        headers: {
          "Content-Type": "application/json",
          custom: "header",
        },
      },
    );
    const responseCustom = await postFetch.get(
      "/users",
      // 3. Definindo headers
      {
        headers: {
          "Content-Type": "application/json",
          custom: "header",
        },
      },
    );
    console.log(response);
    console.log(responseCustom);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

getData();

// 2. Imprimindo dados na tela
const container = document.querySelector("#user-container");

const printData = async () => {
  const data = await getData();
  console.log(data);
  data.forEach((user) => {
    const div = document.createElement("div");
    const nameElement = document.createElement("h3");
    nameElement.textContent = user.name;
    const emailElement = document.createElement("p");
    emailElement.textContent = user.email;
    div.appendChild(nameElement);
    div.appendChild(emailElement);
    container.appendChild(div);
  });
};

printData();

// 4. POST
const form = document.querySelector("#post-form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  axios.post("https://jsonplaceholder.typicode.com/posts", {
    title: titleInput.value,
    body: bodyInput.value,
    userId: 1,
  });
  postFetch.post("/posts", {
    title: titleInput.value,
    body: bodyInput.value,
    userId: 1,
  });
});
