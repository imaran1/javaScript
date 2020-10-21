function displayDetails()
{
    console.log(this.name)
    console.log(this.Mob_No)
}


var information1={
    name: 'Imran Ansari',
    Mob_No: 9450222457,
    display: displayDetails
};

var information2={
    name: 'Noor',
    Mob_No: 8528081996,
    display: displayDetails
};

this.name="Rehan";
this.Mob_No=1234567890;

information1.display()
console.log()
information2.display()
displayDetails();

console.log("\nPower Of call() method")
displayDetails.call(information1, information2)
console.log()
// displayDetails.call(information2)
displayDetails.call()