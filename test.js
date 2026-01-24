async function getData() {
  try {
    const res = await fetch("https://api.restful-api.dev/objects");

    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getData();
