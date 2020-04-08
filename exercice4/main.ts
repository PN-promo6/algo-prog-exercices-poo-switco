class Customer {
    private name: string;
    private bankAccountId: number;

    constructor(name: string, bankAccountId: number) {
        this.name = name;
        this.bankAccountId = bankAccountId;
    }

    getName(): string {
        return this.name;
    }

    getBankAccountId(): number {
        return this.bankAccountId;
    }

    public setName(name: string): void {
        this.name = name;
    }
}

let toupiBankAccountInfo: Customer = new Customer("Toupi", 14);
console.log(toupiBankAccountInfo.getBankAccountId());

toupiBankAccountInfo.setName("Nep");
console.log(toupiBankAccountInfo.getName());
