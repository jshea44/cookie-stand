
// function generateCustomers(minCustomers, maxCustomers) {
//   return Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers;
// }


const seattle = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  // customers: generateCustomers(23, 65),
  generateCustomers(minCustomers, maxCustomers) {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  }
};

const tokyo = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  // customers: generateCustomers(3, 24)
  generateCustomers(minCustomers, maxCustomers) {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  }
}

const dubai = {
  minCustomers: 11,
  maxCustomer: 38,
  avgCookies: 3.7,
  // customers: generateCustomers(11, 38)
  generateCustomers(minCustomers, maxCustomers) {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  }
}

const paris = {
  minCustomers: 20,
  maxCustomer: 38,
  avgCookies: 2.3,
  // customers: generateCustomers(20, 38)
  generateCustomers(minCustomers, maxCustomers) {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  }
}

const lima = {
  minCustomers: 2,
  maxCustomer: 16,
  avgCookies: 4.6,
  // customers: generateCustomers(2, 16)
  generateCustomers(minCustomers, maxCustomers) {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  }
}

for (i = 0; i < 14; i++) {
  let amountSold = Math.floor(seattle.generateCustomers() * seattle.avgCookies);
  console.log(amountSold);
}
