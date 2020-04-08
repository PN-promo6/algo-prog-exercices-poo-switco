class Person {
  firstname: string;
  lastname: string;
  birthday: string = "";

  constructor(firstname: string, lastname: string, birthday?: string) {

    this.firstname= firstname;
      this.lastname = lastname;
      if (birthday) {
        this.birthday= birthday;
    }
  }

  displayFullName() {
    console.log("My name is " + this.firstname + " " + this.lastname )
  }
}

let toupi: Person = new Person("Toupi", "Kun");
toupi.displayFullName();
