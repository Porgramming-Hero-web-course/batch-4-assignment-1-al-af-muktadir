class Car{
    make:string;
    model:string;
    year:number;

    constructor(make:string,model:string,year:number){
this.make=make
this.model=model
this.year=year

    }
    getCarAge(){
        const current = new Date().getFullYear();
        return current-this.year
    }
}
const car1=new Car("Honda","GUnda",2018)
console.log(car1.getCarAge())
