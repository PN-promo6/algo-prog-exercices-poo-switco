class Customer {

    name: string;
    accountNumber: string;

    constructor(name: string, accountNumber: string) {
        this.name = name;
        this.accountNumber = accountNumber;
    }
}

class CustomerPro extends Customer {
    siret: string;

    constructor(name: string, accountNumber: string, siret: string) {
        super(name, accountNumber);
        this.siret = siret;
    }
}

let switco: Customer = new Customer("Sweet Cookie", "14 539 202");
console.log(switco.name, switco.accountNumber);

let switCookie: CustomerPro = new CustomerPro("Sweet Cookie", "14 539 202", "802 606 582 00012");
console.log(switCookie.name, switCookie.accountNumber, switCookie.siret);
