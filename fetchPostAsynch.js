async function getFastPosts(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error");
  }
  return response.json();
}
const requests = [
  getFastPosts("https://dummyjson.com/posts"),
  getFastPosts("https://this-may-not-exist.com/posts"),
  getFastPosts("https://jsonplaceholder.typicode.com/posts"),
];

async function getFast() {
  try {
    const fast = await Promise.any(requests);
    console.log(fast);
  } catch (error) {
    console.error("Something went wrong", error);
  }
}
getFast();
