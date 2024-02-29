let coinFlip, headsTotal=0
do {
    coinFlip = Math.round(Math.random())
    console.log(coinFlip)
    if (coinFlip === 0) {
        console.log('Heads')
        headsTotal++
    } else {
        console.log('Tails')
        break
    }
} while (true)
console.log(`\nHeads: ${headsTotal}`)