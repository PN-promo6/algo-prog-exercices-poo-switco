class Student {

  name: string;
  age: number;

  constructor(name:string, age:number){

    this.age = age;
    this.name = name;

  }

  studentInfos() {
    console.log("Hi, my name is " + this.name + ", I'm " + this.age)
  }
}

let jessica: Student = new Student("Jessica", 29);
jessica.studentInfos();
