function getData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    const data = { id: 1, name: "sample data" };
    callback(data);
  }, 1000);
}
function processData(res) {
  console.log("data processed:", res);
}
getData(processData);
