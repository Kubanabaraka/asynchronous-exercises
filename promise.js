const posts = [
  { title: "post one", body: "this is post one" },
  { title: "post two", body: "this is post two" },
];
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 2000);
}
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("something went wrong");
      }
    }, 3000);
  });
}
// createPost({ title: "post three", body: "This is post three" })
//   .then(getPosts)
//   .catch((error) => console.log(error));
// const promise1 = Promise.resolve("I am happy");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "Success");
// });
// Promise.all([promise1, promise2, promise3]).then((value) => console.log(value));

// asynch and await
// async function test() {
//   await createPost({ title: "post three", body: "This is post three" });
//   getPosts();
// }
// test();
// Async/ Await with fetch

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
}
fetchData();
