type Shape= Circle| Rectangle
type Circle={
    shape:"circle";
    radius:number;

}
type Rectangle={
    shape:"rectangle";
    height:number;
    width:number

}
function calculateShapeArea(shape:Shape):number{
    if(shape.shape==="circle"){
        return 3.1416*shape.radius*shape.radius
    }
    else{
        return shape.height*shape.width
    }
}
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(circleArea)
    console.log(rectangleArea)
  
