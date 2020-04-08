class Playground {
    public static void main(String[ ] args) {
        Customer toupi = new Customer("Toupi", 19);
        System.out.println(toupi.getBankId());
    }
}

class Customer {
    private String name;
    private int bankId;


    public Customer(String name, int bankId) {
        this.name = name;
        this.bankId = bankId;
    }

    public int getBankId() {
        return this.bankId;
    }
}
