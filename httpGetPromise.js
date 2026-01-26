function getData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Status:${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
getData("https://api.restful-api.dev/objects")
  .then((d) => console.log(d))
  .catch((error) => {
    console.log(error);
  });
