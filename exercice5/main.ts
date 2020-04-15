class ShowTicket {

  userName: string;
  artistName: string;
  date: string;
  category: string;
  venueName: string = "";

  constructor(userName: string, artistName: string, date: string, category: string, venueName?: string) {

    this.userName = userName;
    this.artistName = artistName;
    this.date = date;
    this.category = category;
    if (venueName) {
      this.venueName = venueName;
    }
  }

  ticketDetail(): string {

    let htmlTicketDetail: string = `
    <p>Bonjour ${this.userName}</p>
    <p>Nom de l'artiste : ${this.artistName}</p>
    <p>Date du concert : ${this.date}</p>
    <p>Catégorie : ${this.category}</p>`;
    if (this.venueName != "") {
      htmlTicketDetail = htmlTicketDetail + `<p>Salle de concert : ${this.venueName}</p>`;
    }

    return htmlTicketDetail;
  }
}

let testTicket: ShowTicket = new ShowTicket("Toupi", "Nep", "17 Avril", "Or");
console.log(testTicket.ticketDetail());

let testTicket2: ShowTicket = new ShowTicket("Toupi", "Nep", "17 Avril", "Or", "Le Transbordeur");
console.log(testTicket2.ticketDetail());
