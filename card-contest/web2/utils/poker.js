const { Hand } = require('pokersolver');

// Callback function to sort hands of the type
// { hand: [{mint, suit, face}], type: String, score: int }
const faceOrder = [ "0", "2", "3", "4", "5", "6", "7", "8", "9", "t", "j", "q", "k", "a" ];

// if a better than b, return -1

const rank = (a, b) => {
    let gameType = "standard";
    let handA = Hand.solve(a.map(card => `${card.face === "10" ? "T" : card.face[0].toUpperCase()}${card.suit[0]}`), gameType);
    let handB = Hand.solve(b.map(card => `${card.face === "10" ? "T" : card.face[0].toUpperCase()}${card.suit[0]}`), gameType);

    // Five of a kind check
    let facesA = [...new Set(a
        .map(card => card.face.toLowerCase().trim())
        .filter(face => face !== "0"))];
    let facesB = [...new Set(b
        .map(card => card.face.toLowerCase().trim())
        .filter(face => face !== "0"))];

    let wildsA = a
        .map(card => card.face.toLowerCase().trim())
        .filter(face => face === "0");
    let wildsB = b
        .map(card => card.face.toLowerCase().trim())
        .filter(face => face === "0");

    // Compare two 5 of a kinds
    if (facesA.length === 1 && facesB.length === 1) { 

        // Natural check
        if (wildsA.length === 0 && wildsB.length === 0) {
            return faceOrder.indexOf(facesB[0][0]) - faceOrder.indexOf(facesA[0][0]);
        }
        else if (wildsA.length === 0) {
            return -1;
        }
        else if (wildsB.length === 0) {
            return 1;
        }

        // Wild check
        return faceOrder.indexOf(facesB[0][0]) - faceOrder.indexOf(facesA[0][0]);
    }
    else if (facesA.length === 1) return -1;
    else if (facesB.length === 1) return 1;

    return handA.compare(handB);
}

exports.rank = rank;
exports.faceOrder = faceOrder;