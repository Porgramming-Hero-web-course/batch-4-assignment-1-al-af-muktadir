The significance of union and intersection types in Typescript.
-->
Union:----
type one=string | number
its union which ensure typesefety  explicitely and give type gaurd
we can use custom type as a union also
like 
type shape=Circle|Rectangle

Intersection:--
it combines mulitple types into one type and that type hold property of every other types properties they hold
it ensures better readilbilty and clean code for other developer to understand

type one={
    name:string
}
type two={
    year:number
}
type three=one & two