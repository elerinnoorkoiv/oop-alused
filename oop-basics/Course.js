class Course {
    constructor(name) {
      this.name = name;
      this.grades = [];
    }
  
    getGrades() {
      return this.grades;
    }
  
    getAverageGrade() {
      if (this.grades.length === 0) {
        return -1;
      }
      const sum = this.grades.reduce((total, current) => total + current, 0);
      return sum / this.grades.length;
    }
  
    addGrade(student, grade) {
      this.grades.push({ student, grade });
      student.addGrade(this, grade);
    }
  
    description() {
      return `Course: ${this.name}`;
    }
  }
  
  module.exports = Course;