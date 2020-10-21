var course1={
    name: "javaScript"
};

var course2=new Object()
course2.name="python";
course1.name="React.js";
course1.description="Welcome on this course !"

console.log("name" in course1)
console.log("name" in course2)
console.log("description" in course1)
