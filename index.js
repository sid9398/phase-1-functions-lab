function distanceFromHqInBlocks(blocks){
    return Math.abs(blocks - 42)
}
function distanceFromHqInFeet(blocks) {
    const distanceInBlocks = Math.abs(blocks - 42);
    const distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
}
function distanceTravelledInFeet(firstNumber, secondNumber){
    const distanceInBlocks = Math.abs(secondNumber - firstNumber)
    const distanceInFeet = distanceInBlocks * 264
    return distanceInFeet
}
function calculatesFarePrice(firstNumber, secondNumber){
    const totalFeetTravelled = Math.abs((secondNumber - firstNumber) * 264)
    const farePrice = ((totalFeetTravelled - 400) * 0.02)
    const flatRate = 25

    if ((totalFeetTravelled <= 400)){
        return 0
    }
    if ((totalFeetTravelled >= 2500)){
        return 'cannot travel that far'
    }
    if ((totalFeetTravelled >= 400 && totalFeetTravelled <= 2000)){
        return farePrice
    }
    if ((totalFeetTravelled >= 2000)){
        return flatRate
    }
}