let input = document.querySelector('input'),
    select = document.querySelector('select'),
    moneyResult = document.querySelector('.money_result');

window.addEventListener('DOMContentLoaded', srch);
select.addEventListener('change', srch);
input.addEventListener('keydown', srch);

function srch() {
  let link = 'https://www.cbr-xml-daily.ru/daily_json.js';
  let sel = select[select.selectedIndex];  
  fetch(link)
    .then(response => response.json())
    .then(data => {
      moneyResult.textContent = (input.value * 
        data.Valute[sel.value].Value).toFixed(0) + ' rub.';
    })
}