let coinFlip//, tailsTotal=0, headsTotal=0
let numOfFlips = parseInt(prompt("How many coins would you like to flip? (Enter an integer): "))
for (let i = 1; i <= numOfFlips; i++) {
    coinFlip = Math.round(Math.random())
    //console.log(coinFlip)
    if (coinFlip === 0) {
        console.log('Heads')
        //headsTotal++
    } else {
        console.log('Tails')
        //tailsTotal++
    }
}
//console.log(`\nHeads: ${headsTotal}\nTails: ${tailsTotal}`)