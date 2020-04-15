class Playground {
    public static void main(String[ ] args) {
        Client switco = new Client("Sweet Cookie", 123445);
        ClientPro sweet = new ClientPro("Sweet Cookie", 545446, 802606582);
        System.out.println(switco.name + " " + switco.accountNumber);
        System.out.println(sweet.name + " " + sweet.accountNumber + " " + sweet.siret);
    }
}

class Client {
    String name;
    int accountNumber;
    
    Client(String name, int accountNumber) {
        this.name = name;
        this.accountNumber = accountNumber;
    }
}

class ClientPro extends Client {
    int siret;
    
    ClientPro(String name, int accountNumber, int siret) {
        super(name, accountNumber);
        this.siret = siret;
    } 
}