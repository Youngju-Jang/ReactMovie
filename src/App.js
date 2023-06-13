import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(20);
  const onChange = (e) => {
    setMoney(e.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      My Money : <input onChange={onChange} value={money} />
      <br />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin, index) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}) :
              {Math.round((money / coin.quotes.USD.price) * 1000) / 1000} 개
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
