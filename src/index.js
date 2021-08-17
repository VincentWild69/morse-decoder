const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    let tempString = '';
    let count1 = 0;

    for (i = 0; i < expr.length; i++) {
	tempString += expr[i];
	count1++;
	if ((count1 % 10) == 0 && i < expr.length - 1) {
		tempString += ','
	    }
    }

    tempString = tempString.replace(/10/g, '.');
    tempString = tempString.replace(/11/g, '-');
    tempString = tempString.replace(/0/g, '');


    let letterArr = tempString.split(',');

    let result = '';
    for (i = 0; i < letterArr.length; i++) {
        if (letterArr[i] == '**********') {
            result += ' ';
            continue
        }
        result += MORSE_TABLE[letterArr[i]];
    }
    return result
}


module.exports = {
    decode
}