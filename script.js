const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const table = document.getElementById('myTable')

const getSum = () => {
let prices = document.getElementsByClassName('price');
let sum = 0;
for(let i = 0; i < prices.length; i++){
  sum += parseInt(prices[i].innerHTML); 
}
let tr = document.createElement('tr');
let td = document.createElement('td');
td.innerText = sum;
td.setAttribute('id','total-price');
tr.append(td);
table.append(tr)
  
};

getSumBtn.addEventListener("click", getSum);

