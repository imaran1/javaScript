var craditcard={
    _name: "Imran",
    get name(){
        return this._name
    },
    set name(value){
        this._name=value
    }
}

console.log(craditcard.name)

craditcard.name="Noor"

console.log(craditcard.name)