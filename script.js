
const btnApi = document.querySelector("#btn-api");
const outputApi = document.querySelector("#api-output");

btnApi.addEventListener("click", getApiData);

async function getApiData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const jsonData = await response.json();
  let output = "";
  jsonData.forEach((post) => {
    output += `<div class='post'>
            <h4>${post.title}</h4>
            <p>${post.body}</p>
      </div>`;
});

  outputApi.innerHTML = output;
}