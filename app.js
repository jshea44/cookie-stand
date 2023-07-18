'use-strict';

// Create a constructor function && prototype function && create instances of each store
function Store(city, minCustomers, maxCustomers, avgCookies) {
  this.city = city;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.customers = this.generateCustomers();
}

Store.prototype.generateCustomers = function (minCustomers, maxCustomers) {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
}

const seattle = new Store('Seattle', 23, 65, 6.3);
const tokyo = new Store('Tokyo', 3, 24, 1.2);
const dubai = new Store('Dubai', 11, 38, 3.7);
const paris = new Store('Paris', 20, 38, 2.3);
const lima = new Store('Lima', 2, 16, 4.6);


// Global data
const times = ['6:00am:', '7:00am:', '8:00am:', '9:00am:', '10:00am:', '11:00am:', '12:00pm:', '1:00pm:', '2:00pm:', '3:00pm:', '4:00pm:', '5:00pm:', '6:00pm:', '7:00pm:', 'Daily Location Total'];
const locations = [seattle, tokyo, dubai, paris, lima];

// Create and append header elements

function createHeader(arr) {
  let table = document.getElementById('sales-table');
  let thead = document.createElement('thead');
  table.appendChild(thead);
  let tr = document.createElement('tr');
  thead.appendChild(tr);

  for (let i = 0; i < arr.length; i++) {
    let th = document.createElement('th');
    th.textContent = arr[i];
    console.log(th.textContent);
    tr.appendChild(th);
  }
}

createHeader(times);



// finding hourly cookies sold per store && appending them to their respective objects && appending on page

function getSales(arr) {
  let table = document.getElementById('sales-table');
  let tbody = document.createElement('tbody');
  table.appendChild(tbody);

  for (let i = 0; i < arr.length; i++) {
    let storeSales = [];
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    for (let j = 0; j < times.length - 1; j++) {
      storeSales.push(Math.floor(arr[i].generateCustomers() * arr[i].avgCookies));
      let td = document.createElement('td');
      td.textContent = storeSales[j];
      tr.appendChild(td);
      td.setAttribute('class', 'tdclass');
    }
    arr[i].amountSoldPerHour = storeSales;
  }

}

getSales(locations);







// finding total cookies sold for a given day for each store && appending to respective object




// seattleTotalCookies = 0;
// tokyoTotalCookies = 0;
// dubaiTotalCookies = 0;
// parisTotalCookies = 0;
// limaTotalCookies = 0;
// for (let i = 0; i < times.length - 1; i++) {
//   seattleTotalCookies += seattle.amountSoldPerHour[i];
//   tokyoTotalCookies += tokyo.amountSoldPerHour[i];
//   dubaiTotalCookies += dubai.amountSoldPerHour[i];
//   parisTotalCookies += paris.amountSoldPerHour[i];
//   limaTotalCookies += lima.amountSoldPerHour[i];
// }
// seattle.totalCookies = seattleTotalCookies;
// tokyo.totalCookies = tokyoTotalCookies;
// dubai.totalCookies = dubaiTotalCookies;
// paris.totalCookies = parisTotalCookies;
// lima.totalCookies = limaTotalCookies;



// //selecting the already created div in HTML
// const div = document.getElementById('sales-lists');

// // create div with h2 and ul for each store && add data
// const seattleList = document.createElement('ul');
// for (let i = 0; i < times.length; i++) {
//   if (i === 0) {
//     const lists = document.createElement('div');
//     div.appendChild(lists);
//     const h2 = document.createElement('h2');
//     h2.textContent = seattle.city;
//     lists.appendChild(h2);
//     div.appendChild(seattleList);
//   } else if (i > 0 && i < times.length - 1) {
//     const listItem = document.createElement('li');
//     listItem.textContent = `${times[i]} ${seattle.amountSoldPerHour[i]} cookies`;
//     seattleList.appendChild(listItem);
//   } else {
//     const listItem = document.createElement('li');
//     listItem.textContent = `${times[i]} ${seattle.totalCookies} cookies`;
//     seattleList.appendChild(listItem);
//   }
// }

// const tokyoList = document.createElement('ul');
// for (let i = 0; i < times.length; i++) {
//   if (i === 0) {
//     const lists = document.createElement('div');
//     div.appendChild(lists);
//     const h2 = document.createElement('h2');
//     h2.textContent = tokyo.city;
//     lists.appendChild(h2);
//     div.appendChild(tokyoList);
//   } else if (i > 0 && i < times.length - 1) {
//     const listItem = document.createElement('li');
//     listItem.textContent = `${times[i]} ${tokyo.amountSoldPerHour[i]} cookies`;
//     tokyoList.appendChild(listItem);
//   } else {
//     const listItem = document.createElement('li');
//     listItem.textContent = `${times[i]} ${tokyo.totalCookies} cookies`;
//     tokyoList.appendChild(listItem);
//   }
// }

// const dubaiList = document.createElement('ul');
// for (let i = 0; i < times.length; i++) {
//   if (i === 0) {
//     const lists = document.createElement('div');
//     div.appendChild(lists);
//     const h2 = document.createElement('h2');
//     h2.textContent = dubai.city;
//     lists.appendChild(h2);
//     div.appendChild(dubaiList);
//   } else if (i > 0 && i < times.length - 1) {
//     const listItem = document.createElement('li');
//     listItem.textContent = `${times[i]} ${dubai.amountSoldPerHour[i]} cookies`;
//     dubaiList.appendChild(listItem);
//   } else {
//     const listItem = document.createElement('li');
//     listItem.textContent = `${times[i]} ${dubai.totalCookies} cookies`;
//     dubaiList.appendChild(listItem);
//   }
// }

// const parisList = document.createElement('ul');
// for (let i = 0; i < times.length; i++) {
//   if (i === 0) {
//     const lists = document.createElement('div');
//     div.appendChild(lists);
//     const h2 = document.createElement('h2');
//     h2.textContent = paris.city;
//     lists.appendChild(h2);
//     div.appendChild(parisList);
//   } else if (i > 0 && i < times.length - 1) {
//     const listItem = document.createElement('li');
//     listItem.textContent = `${times[i]} ${paris.amountSoldPerHour[i]} cookies`;
//     parisList.appendChild(listItem);
//   } else {
//     const listItem = document.createElement('li');
//     listItem.textContent = `${times[i]} ${paris.totalCookies} cookies`;
//     parisList.appendChild(listItem);
//   }
// }

// const limaList = document.createElement('ul');
// for (let i = 0; i < times.length; i++) {
//   if (i === 0) {
//     const lists = document.createElement('div');
//     div.appendChild(lists);
//     const h2 = document.createElement('h2');
//     h2.textContent = lima.city;
//     lists.appendChild(h2);
//     div.appendChild(limaList);
//   } else if (i > 0 && i < times.length - 1) {
//     const listItem = document.createElement('li');
//     listItem.textContent = `${times[i]} ${lima.amountSoldPerHour[i]} cookies`;
//     limaList.appendChild(listItem);
//   } else {
//     const listItem = document.createElement('li');
//     listItem.textContent = `${times[i]} ${lima.totalCookies} cookies`;
//     limaList.appendChild(listItem);
//   }
// }