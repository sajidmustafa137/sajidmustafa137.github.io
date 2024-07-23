let sleepTips = [
    "develop a bedtime routine", 
    "stay away from your phone",
    "don't look at the clock",
    "drink less caffeine",
    "get out of bed if you are struggling to fall asleep",
    "don't drink anything before sleeping",
    "lower your room temperature",
    "invest in a good mattress",
    "block out light",
    "sleep at a consistent time",
    "get more sunlight during the day",
    "exercise more during the day",
    "eat dinner a few hours before bed",
    "don't drink alchohol",
    "don't smoke",
    "reserve your bed for sleep"
];

let tip = document.getElementById("tip");

function randomTip(sleepTips) {
    return sleepTips[(Math.floor(Math.random() * sleepTips.length))];
}

tip.textContent = randomTip(sleepTips);

function newTip() {
    tip.textContent = randomTip(sleepTips);
}

