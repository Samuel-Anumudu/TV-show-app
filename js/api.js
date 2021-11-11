// How to make a request - anatomy of HTTP requests and responses
// XML Http Request

const req = new XMLHttpRequest();

req.onload = function () {
  console.log("ALL DONE WITH REQUEST!!!");
  const data = JSON.parse(this.responseText);
  // current bitcoin price
  console.log(data.ticker.price);
};

req.onerror = function () {
  console.log("ERROR!!!");
};

req.open("GET", "https://api.cryptonator.com/api/ticker/btc-usd");
req.send();

// Fetch APIs
fetch("https://api.cryptonator.com/api/ticker/btc-usd")
  .then((res) => {
    console.log("Response", res);
    return res.json();
  })
  .then((data) => {
    console.log(data.ticker.price);
  })
  .catch((err) => {
    console.log("Error", err);
  });

// Async method of fetching the same data

const fetchBitcoinPrice = async () => {
  try {
    const res = await fetch("https://api.cryptonator.com/api/ticker/btc-usd");
    const data = await res.json();
    console.log(data.ticker.price);
  } catch (error) {
    console.log("Something went wrong!", error);
  }
};

fetchBitcoinPrice();
