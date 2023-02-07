function add(x , y){
    return x + y;
}
function multiply(x, y){
    return x * y;
}



class Person{
    constructor(name, age){
        this.setName(name);
        this.setAge(age);
    }

    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getAge(){
        return this.age;
    }
    setAge(age){
        this.age = age;
    }
    printInfo(){
        return (this.getName() + ", " + this.getAge());
    }
}
Person.address = "1000 N 4th St";
class Student extends Person{
    constructor(name, age, id){
        super(name, age);
        this.setId(id);
    }
    getId(){
        return this.id;
    }
    setId(id){
        this.id = id;
    }
    printInfo(){
        return (super.printInfo() + ", " + this.getId());
    }
}

class Employee extends Person{
    constructor(name, age, salary){
        super(name, age);
        this.setSalary(salary);
    }
    setSalary(salary){
        this.salary = salary;
    }
    getSalary(){
        return this.salary;
    }
    printInfo(){
        return (super.printInfo() + ", " + this.getSalary());
    }
    getEmployeeInfo(){
        return this.getSalary();
    }
}

let s = new Student("David", 54, 613421);
let e = new Employee("Mary", 116, 90);

class BankAccount{
    constructor(balance){
        this.setBalance(balance);
    }
    setBalance(balance){
        if(balance < 0){
            alert("Negative balance not allowed");
        }else{
            this.jhon = balance;
        }  
    }
    getBalance(){
        return this.jhon;
    }
}

let acc1 = new BankAccount(-5000);
console.log(acc1);