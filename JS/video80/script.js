// let animal={
//     eats: true
// };

// let rabbit={
//     jumps: true
// }

// rabbit.__proto__= animal;

class Animal{
    constructor(name)
    {this.name  = name;
        console.log('object createdf');
        
    }

    eats()
    {
        console.log('bhooka');
        
    }

    jumps()
    {
        console.log('khooding');
        
    }
}

class Lion extends Animal{

    constructor(name)
    {
        super(name);
        console.log('object createdf');
        
    }

    roar()
    {
        console.log('he roars');
        
    }
}


let l = new Lion("shera");
console.log(l);


let a = new Animal("bunyn");
console.log(a);
console.log(a.eats());

