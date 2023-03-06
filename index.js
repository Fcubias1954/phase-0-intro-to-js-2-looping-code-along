const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
}
return gifts;
}
wrapGifts(gifts);


function writeCards(names, event) {
    const messages = []
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
        debugger;
    }
    return messages;
}
writeCards(["Sam", "Pat", "Gus"], "birthday");

function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown-- );
    }
}
