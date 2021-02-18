class Car {
    constructor(model, doors,isHybrid) {
      this.model = model;
      this.doors = doors;
      this.isHybrid = isHybrid;      
      this.createdAt = new Date();
    }
}

module.exports = Car;