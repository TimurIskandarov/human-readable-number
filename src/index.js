module.exports = function toReadable (number) {
    const dozens = {
        0: ' ',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    };
    const firstDozen = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    };
    const secondDozen = {
        0: 'ten',
        1: 'eleven',
        2: 'twelve',
        3: 'thirteen',
        4: 'fourteen',
        5: 'fifteen',
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen',
    };
    let [unit, dozen, hundred] = String(number).split('').reverse();
    let hundredWord = hundred ? firstDozen[hundred] + " hundred " : '';
    let dozenWord = dozen ? dozens[dozen] || secondDozen[unit] : '';
    let unitWord = dozen != '1' ? " " + firstDozen[unit] : '';
    return (hundredWord + dozenWord + unitWord).replace('  ', '').trim() || "zero";
} 
