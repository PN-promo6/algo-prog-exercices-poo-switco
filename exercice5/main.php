<?php

class ShowTicket
{

  public $userName;
  public $artistName;
  public $date;
  public $category;
  public $venueName = null;

  function __construct($userName, $artistName, $date, $category, $venueName = null)
  {

    $this->userName = $userName;
    $this->artistName = $artistName;
    $this->date = $date;
    $this->category = $category;
    if (!is_null($venueName)) {
      $this->venueName = $venueName;
    }
  }

  function ticketDetail()
  {
    $htmlTicketDetail =
      "<p>Bonjour $this->userName</p>
       <p>Nom de l'artiste : $this->artistName</p>
       <p>Date du concert : $this->date</p>
       <p>Catégorie : $this->category</p>";

    if (!is_null($this->venueName)) {
      $htmlTicketDetail = $htmlTicketDetail . "<p>Salle de concert : $this->venueName</p>";
    }
    return $htmlTicketDetail;
  }
}

$ticket1 = new ShowTicket("Toupi", "Nep", "17 Avril", "Or", "Le Transbordeur");
echo ($ticket1->ticketDetail());
