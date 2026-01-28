// API Fetch with Retry Mechanism

async function getdata(url, times) {
  let retries = 0;
  while (retries < times) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Sorry");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      retries++;
      console.log(`Retries ${retries}/${times}`);
    }
  }
}
getdata("https://jsonplaceolder.typicode.com/posts/6", 3);
