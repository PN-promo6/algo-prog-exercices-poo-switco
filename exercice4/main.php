<?php
class Customer {
  private $name;
  private $bankAccountId;

  function __construct($name, $bankAccountId){
    $this->name = $name;
    $this->bankAccountId = $bankAccountId;
  }

  function getBankAccountId() {
    return $this->bankAccountId;
  }

  function getName() {
    return $this->name;
  }

  function setName($name) {
    $this->name = $name;
  }
}

$toupiBankAccountInfo = new Customer("Toupi", 17);
echo($toupiBankAccountInfo->getBankAccountId());

$toupiBankAccountInfo->setName("Nep");
echo($toupiBankAccountInfo->getName());
