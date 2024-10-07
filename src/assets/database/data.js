async function getPlanet() {
  const limit = 1;
  return fetch(
    `https://www.asterank.com/api/asterank?query={"e":{"$lt":0.1},"i":{"$lt":4},"a":{"$lt":1.5}}&limit=${limit}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json(); // Parse JSON data from the response
    })
    .then((data) => {
      console.log(data); // Handle the data from the response
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
