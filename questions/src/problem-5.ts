function getProperty<T, K extends keyof T>(object: T, keys: K): T[K] {
    return object[keys];
}
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));