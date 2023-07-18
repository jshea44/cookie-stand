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


// finding hourly cookies sold per store && appending them to their respective objects && finding the grand total
const times = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];
const locations = [seattle, tokyo, dubai, paris, lima];

function getSales(arr) {
  for (let i = 0; i < arr.length; i++) {
    let storeSales = [];
    for (let j = 0; j < times.length; j++) {
      storeSales.push(Math.floor(arr[i].generateCustomers() * arr[i].avgCookies));

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