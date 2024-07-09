function distanceFromHqInBlocks(pickupLocation) {
    const headquartersLocation = 42;
    return Math.abs(pickupLocation - headquartersLocation);
}

function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * 264;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance > 2500) {
        return 'cannot travel that far';
    } else if (distance > 2000) {
        return 25;
    } else if (distance > 400) {
        return (distance - 400) * 0.02;
    } else {
        return 0;
    }
}

console.log(distanceFromHqInBlocks(50));  
console.log(distanceFromHqInFeet(50));    
console.log(distanceTravelledInFeet(34, 38));  
console.log(calculatesFarePrice(34, 38)); 
console.log(calculatesFarePrice(50, 58)); 
console.log(calculatesFarePrice(34, 60)); 
