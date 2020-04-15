(switco)
class Playground {
    public static void main(String[ ] args) {
        ShowTicket ticket1 = new ShowTicket("Toupi", "Nep", "17 Avril", "Or", "Le Transbordeur");
        ShowTicket ticket2 = new ShowTicket("Toupi", "Nep", "17 Avril", "Or");
        System.out.println(ticket1.ticketDetail());
        System.out.println(ticket2.ticketDetail());
    }
}

class ShowTicket {
    
    public String userName;
    public String artistName;
    public String date;
    public String category;
    public String venueName = "";

    
    ShowTicket(String userName, String artistName, String date, String category){
        this.userName = userName;
        this.artistName = artistName;
        this.date = date;
        this.category = category;
    } 

    ShowTicket(String userName, String artistName, String date, String category, String venueName){
        this.userName = userName;
        this.artistName = artistName;
        this.date = date;
        this.category = category;
        // On peut remplacer les 4 this du haut par this(userName, artistName, date, category);
        this.venueName = venueName;
    }

    String ticketDetail() {
        String htmlTicketDetail =
        "Bonjour " + this.userName +
        ", Nom de l'artiste : " + this.artistName +
        ", Date du concert : " + this.date +
        ", Catégorie : " + this.category;
         if(this.venueName != "") {
            htmlTicketDetail = htmlTicketDetail + ", Salle de concert : " + this.venueName;
            // htmlTicketDetail += ", Salle de concert : " + this.venueName;
        }
        
        return htmlTicketDetail;
    }
}