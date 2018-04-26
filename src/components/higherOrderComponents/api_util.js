// "Accept", "application/json"
// "https://icanhazdadjoke.com/"

const fetchJoke = async () => {
  const headers = new Headers();
  headers.append("Accept", "application/json");

  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers
  });

  const payload = await response.json();

  return payload;
};

export default fetchJoke;
