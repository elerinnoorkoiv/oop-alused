class Student {
    constructor(name, id) {
      let _name = name;
      let _id = id;
      let _status = "Active";
  
      this.getId = function() {
        return _id;
      };
  
      this.setName = function(name) {
        _name = name;
      };
  
      this.getName = function() {
        return _name;
      };
  
      this.setStatus = function(status) {
        const allowedStatuses = ["Active", "Expelled", "Finished", "Inactive"];
        if (allowedStatuses.includes(status)) {
          _status = status;
        }
      };
  
      this.getStatus = function() {
        return _status;
      };
    }
  }
  
  const student1 = new Student("John Doe", 12345);
  console.log("Student ID:", student1.getId()); 
  console.log("Student Name:", student1.getName()); 
  console.log("Student Status:", student1.getStatus()); 
  
  student1.setName("Jane Smith");
  console.log("Updated Student Name:", student1.getName()); 
  
  student1.setStatus("Expelled");
  console.log("Updated Student Status:", student1.getStatus()); 
  
  student1.setStatus("InvalidStatus");
  console.log("Updated Student Status:", student1.getStatus()); 