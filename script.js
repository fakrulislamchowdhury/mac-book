// Assignment 
let countOne = 0;
let countTwo = 0;
let countThree = 0;

function calculate(totalPrice, cost) {
    let tPrice = parseInt(document.getElementById(totalPrice).innerText);
    let extraCost = parseInt(document.getElementById(cost).innerText);

    if (cost == 'memory-cost') {
        if (extraCost == 0 && countOne == 1) {
            document.getElementById(totalPrice).innerText = (tPrice - 180);
            countOne = 0;
        } else if (extraCost == 180 && countOne == 0) {
            countOne = 1;
            document.getElementById(totalPrice).innerText = tPrice + extraCost;
        }

    } else if (cost == 'storage-cost') {
        if (extraCost == 0 && countTwo > 0) {
            document.getElementById(totalPrice).innerText = (tPrice - (countTwo == 1 ? 100 : 180));
            countTwo = 0;

        } else if (extraCost == 100) {
            if (countTwo == 2) {
                document.getElementById(totalPrice).innerText = (tPrice - 80);
            } else if (countTwo == 0) {
                document.getElementById(totalPrice).innerText = (tPrice + extraCost);
            }
            countTwo = 1;

        } else if (extraCost == 180) {
            if (countTwo == 1) {
                document.getElementById(totalPrice).innerText = (tPrice + 80);
            } else if (countTwo == 0) {
                document.getElementById(totalPrice).innerText = (tPrice + extraCost);
            }
            countTwo = 2;

        }
    } else if (cost == 'delivery-charge') {
        if (extraCost == 0 && countThree == 1) {
            document.getElementById(totalPrice).innerText = (tPrice - 20);
            countThree = 0;

        } else if (extraCost == 20 && countThree == 0) {
            countThree = 1;
            document.getElementById(totalPrice).innerText = tPrice + extraCost;
        }
    }
    document.getElementById('final').innerText = parseInt(document.getElementById(totalPrice).innerText);
}

function discount() {
    const promoCode = document.getElementById('promoCode').value;
    if (promoCode === 'stevekaku') {
        let total = parseInt(document.getElementById('total-price').innerText);
        let discountVal = (20 / 100);
        let newTotal = total - (total * discountVal);
        //console.log(newTotal);
        document.getElementById('final').innerText = newTotal;
    }
}

let extraCost = document.getElementById('memory-cost');
let storageCost = document.getElementById('storage-cost');
let deliveryCost = document.getElementById('delivery-charge');
let totalPrice = document.getElementById('total-price');

document.getElementById('memory-price-fixed').addEventListener('click', function() {
    extraCost.innerText = 0;
    calculate('total-price', 'memory-cost');
});

document.getElementById('memory-price-increment').addEventListener('click', function() {
    extraCost.innerText = 180;
    calculate('total-price', 'memory-cost');
});

document.getElementById('storage-btn1').addEventListener('click', function() {
    storageCost.innerText = 0;
    calculate('total-price', 'storage-cost');
});

document.getElementById('storage-btn2').addEventListener('click', function() {
    storageCost.innerText = 100;
    calculate('total-price', 'storage-cost');
});
document.getElementById('storage-btn3').addEventListener('click', function() {
    storageCost.innerText = 180;
    calculate('total-price', 'storage-cost');
});
document.getElementById('delivery-btn1').addEventListener('click', function() {
    deliveryCost.innerText = 0;
    calculate('total-price', 'delivery-charge');
});
document.getElementById('delivery-btn2').addEventListener('click', function() {
    deliveryCost.innerText = 20;
    calculate('total-price', 'delivery-charge');

});