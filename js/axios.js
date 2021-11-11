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
