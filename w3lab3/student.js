
module.exports =  class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    studentInfo() {
        return "id: " + this.id +", name: " + this.name;
    }
}
