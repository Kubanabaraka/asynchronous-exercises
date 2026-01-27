function getData(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("Sorry");
    } else {
      return response.json();
    }
  });
}
function fetM(urls) {
  const promises = apiUrls.map((url) => getData(url));
  return Promise.all(promises);
}
const apiUrls = [
  "https://jsonplaceholder.typicode.com/posts/4",
  "https://jsonplaceholder.typicode.com/posts/5",
  "https://jsonplaceholder.typicode.com/posts/6",
];
fetM()
  .then((res) => {
    console.log(res);
  })
  .catch((er) => {
    console.log(er);
  });
