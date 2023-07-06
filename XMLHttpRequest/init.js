const getBtn = document.querySelector("#getBtn");
const postBtn = document.querySelector("#postBtn");

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", postData);

function getData() {
  sendHttpRequest("GET", "https://reqres.in/api/users").then((responseData) => {
    // const data = JSON.parse(xhr.response)
    const data = xhr.response;
    console.log(data);
  });
}
function postData() {
  console.log("just making the function to fuck off");
}

function sendHttpRequest(method, url) {
  const promise = new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    // preapers the http request to be sent
    xhr.open(method, url);

    xhr.responseType = "json";

    xhr.onload = function () {
      resolve(xhr.response);
    };

    // this line of code actually send the request
    xhr.send();
  });
}
