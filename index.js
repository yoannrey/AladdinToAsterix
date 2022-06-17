/**
 * The main goal and purpose to this project are to convert Arabic numbers to Roman numbers
 */


/**
 * Function used to convert the arabic nb into roman one
 * @author                          Yoann Rey
 * @return  {String}                Roman number
 */

function convertToRoman() {
    let arabicNumber = parseInt(document.querySelector('input').value);
    const result = document.getElementById('result');
    // Error handling
    if (arabicNumber >= 4000 || typeof arabicNumber !== 'number') return 'Can\'t display number superior or equal to 4000';
    const romanNb = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
    // Use 4*10^n and 9*10^n to limit character to 3 times when it follows itself.
    const romanNbTranslated = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let finalRomanNumber = '' // string
    let i = 12; // index to iterate on arrays
    // Loop used to reduce to 0 the number
    while (arabicNumber !== 0) {
        if (romanNbTranslated[i] <= arabicNumber) {
            finalRomanNumber += romanNb[i];
            arabicNumber -= romanNbTranslated[i];
        } else {
            i--;
        }
    }
    result.innerHTML = finalRomanNumber
    result.style.display = 'block'
    return finalRomanNumber
}


