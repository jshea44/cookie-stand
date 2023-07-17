
// function generateCustomers(minCustomers, maxCustomers) {
//   return Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers;
// }


const seattle = {
  city: "Seattle",
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  // customers: generateCustomers(23, 65),
  generateCustomers(minCustomers, maxCustomers) {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  }
};

const tokyo = {
  city: "Tokyo",
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  // customers: generateCustomers(3, 24)
  generateCustomers(minCustomers, maxCustomers) {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  }
}

const dubai = {
  city: "Dubai",
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  // customers: generateCustomers(11, 38)
  generateCustomers(minCustomers, maxCustomers) {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  }
}

const paris = {
  city: "Paris",
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
  // customers: generateCustomers(20, 38)
  generateCustomers(minCustomers, maxCustomers) {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  }
}

const lima = {
  city: "Lima",
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  // customers: generateCustomers(2, 16)
  generateCustomers(minCustomers, maxCustomers) {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  }
}


const amountSoldSeattle = [];
const amountSoldTokyo = [];
const amountSoldDubai = [];
const amountSoldParis = [];
const amountSoldLima = [];
for (i = 0; i < 14; i++) {

  amountSoldSeattle.push(Math.floor(seattle.generateCustomers() * seattle.avgCookies));
  amountSoldTokyo.push(Math.floor(tokyo.generateCustomers() * tokyo.avgCookies));
  amountSoldDubai.push(Math.floor(dubai.generateCustomers() * dubai.avgCookies));
  amountSoldParis.push(Math.floor(paris.generateCustomers() * paris.avgCookies));
  amountSoldLima.push(Math.floor(lima.generateCustomers() * lima.avgCookies));
  
}

seattle.amountSoldPerHour = amountSoldSeattle;
tokyo.amountSoldPerHour = amountSoldTokyo;
dubai.amountSoldPerHour = amountSoldDubai;
paris.amountSoldPerHour = amountSoldParis;
lima.amountSoldPerHour = amountSoldLima;

console.log(seattle);
console.log(tokyo);
console.log(dubai);
console.log(paris);
console.log(lima);
