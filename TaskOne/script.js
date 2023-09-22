document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById("currency-table")

  fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1"
  )
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < 5 && i < data.length; i++) {
        const currency = data[i];
        console.log(currency)
        const row = document.createElement("tr");
        row.innerHTML = `
                  <td>${currency.id}</td>
                  <td>${currency.symbol}</td>
                  <td>${currency.name}</td>
              `;

        if (currency.symbol === "usdt") {
          row.classList.add("usdt");
        } else if (i < 5) {
          row.classList.add("blue-bg"); 
        }

        table.appendChild(row);
      }
    })
    .catch((error) => console.error("Ошибка при получении данных:", error));
});
