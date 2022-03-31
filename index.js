const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const reducer = (accum, element) => {
    let item = 0
    const battery = () => {
        let totalBatteries = 0
        totalBatteries = element
        console.log(totalBatteries)
        return item += totalBatteries
    }
    return accum += item;
}

let totalBatteries = batteryBatches.reduce(reducer, 31)