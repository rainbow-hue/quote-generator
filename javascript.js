var quotes = [
    '“Anyone who has ever made anything of importance was disciplined.” — Andrew Hendrixson',
    '“Don’t spend time beating on a wall, hoping to transform it into a door.” — Coco Chanel',
    '“Creativity is intelligence having fun.” — Albert Einstein',
    '“Optimism is the one quality more associated with success and happiness than any other.” — Brian Tracy',
    '“Always keep your eyes open. Keep watching. Because whatever you see can inspire you.” — Grace Coddington',
    ' “What you get by achieving your goals is not as important as what you become by achieving your goals.” — Henry David Thoreau',
    '“If the plan doesn’t work, change the plan, but never the goal.” — Author Unknown',
    '“I destroy my enemies when I make them my friends.” — Abraham Lincoln',
    ' “Don’t live the same year 75 times and call it a life.” — Robin Sharma',
    '“You cannot save people, you can just love them.” — Anaïs Nin'
]

function newQuote(){
    var randnum=Math.floor(Math.random()*(quotes.length));
    document.getElementById('quoteDisplay').innerHTML=quotes[randnum];
}