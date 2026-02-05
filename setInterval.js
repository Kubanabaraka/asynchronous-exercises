function execution(fn, interval) {
  setInterval(fn, interval);
}
function say() {
  console.log("Hello there");
}

execution(say, 1000);
