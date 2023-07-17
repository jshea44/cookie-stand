
// function generateCustomer() {
//   Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
// }

const seattle = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  generateCustomer() {
    Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  }
};

const tokyo = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  generateCustomer() {
    Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  }
}

const dubai = {
  minCustomers: 11,
  maxCustomer: 38,
  avgCookies: 3.7,
  generateCustomer() {
    Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  }
}

const paris = {
  minCustomers: 20,
  maxCustomer: 38,
  avgCookies: 2.3,
  generateCustomer() {
    Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  }
}

const lima = {
  minCustomers: 2,
  maxCustomer: 16,
  avgCookies: 4.6,
  generateCustomer() {
    Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  }
}
