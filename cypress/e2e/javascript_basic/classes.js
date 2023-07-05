class Car{
constructor(carname, model, year) {
    this.carname = carname;
    this.model = model;
    this.year = year;
}
carAge() {
    let date = new Date(); // Comes from js
    return date.getFullYear() - this.year;
}
}

var myCar = new Car("Seat", "Leon", "2005");
console.log(myCar.carname,myCar.model)
console.log("Car age is: "  ,myCar.carAge())