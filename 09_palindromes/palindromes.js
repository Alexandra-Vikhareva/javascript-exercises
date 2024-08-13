const palindromes = function (str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '')
            .toLowerCase();
    reversedStr = str.split('')
                        .reverse()
                        .join('');
    return reversedStr == str

};

// Do not edit below this line
module.exports = palindromes;
