const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']


const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']

const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4)); // [['speed',400],['color','magenta']]

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])  // price : 50, color : beige, material : cotton, season : autumn
    
}

const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push([key, drone[key]])
})
console.log(result) // [['speed',100],['color','yellow']]