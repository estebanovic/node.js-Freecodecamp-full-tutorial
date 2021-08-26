const EvenEmmitter = require("events");
const evenEmmitter = new EvenEmmitter();

evenEmmitter.on("tutorial",(num1, num2)=> {
    console.log(num1 + num2);
})

evenEmmitter.emit('tutorial',2,3);

class Person extends EvenEmmitter{
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }
}

let pedro = new Person("Pedro");
let christina = new Person('Christina');
christina.on('name', ()=>{
    console.log('my name is ' + christina.name);
});
pedro.on('name',()=>{
    console.log('my name is ' + pedro.name);
});

christina.emit('name');
pedro.emit('name');