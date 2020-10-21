function Flight(airlines,flightNo)
{
    this.airlines=this.airlines
    this.flightNo=this.flightNo

    this.display=function()
    {
        console.log(this.airlines)
        console.log(this.flightNo)
    }
}

var flight1=new Flight("indian flight", "IA786")
var flight2=new Flight("canada flight", "CD0876")

// console.log(flight1 instanceof Flight)
// console.log(flight2 instanceof Flight)

// console.log(flight1.constructor == Flight)
// console.log(flight2.constructor == Flight)

// console.log(flight1.constructor === Flight)
// console.log(flight2.constructor === Flight)

flight1.display()
flight2.display()