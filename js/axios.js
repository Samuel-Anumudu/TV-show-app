async function getBitcoinPrice() {
  try {
    const response = await axios.get(
      "https://api.cryptonator.com/api/ticker/btc-usd"
    );
    const data = response.data.ticker.price;
    console.log(data);
  } catch (error) {
    console.error("Something went wrong", error);
  }
}

getBitcoinPrice();

const getDadJokes = async () => {
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get("https://icanhazdadjoke.com/", config);
  console.log(res.data.joke);
};

getDadJokes();

const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw Error(`Couldn't find element ${selector}`);
};

const button = getElement(".btn");
const header = getElement(".header");

button.addEventListener("click", async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    const jokes = res.data.joke;
    header.innerHTML = `${jokes} 🤣`;
  } catch (e) {
    header.innerHTML = "No jokes available, sorry :( ";
  }
});
