module.exports = class Student{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
    studentInfo(){
        return this.name + ", " + this.id;
    }
}