const numberInput = (pos) => {
    let number = NaN;

    while (isNaN(number)) {
        let answer = prompt(`enter number #${pos}:`);

        if (answer === null) {
            // if the user clicks Cancel, the script will say 'Bye'
            return null;
        } else if (answer.trim().length === 0 || isNaN(+answer)) {
            // If the user inputs '' or NaN, the script ask the user to input a number again
            alert(`Number #${pos}: You passed <${answer}>. Please pass a Number!`);
        } else {
            number = +answer;
        }
    }

    return number;
}

const bye = () => alert('Bye!');

const printCalculations = (first, second) => {
    alert(`User entered ${first} and ${second}:
        ${first} + ${second} = ${first + second}
        ${first} - ${second} = ${first - second}
        ${first} * ${second} = ${first * second}
        ${first} / ${second} = ${second === 0 ? "It's a bad idea divide by 0!" : first / second}`
    );
};

(() => {
    let firstNum, secondNum;

    firstNum = numberInput(1);
    if (firstNum === null) bye();

    secondNum = numberInput(2);
    if (secondNum === null) bye();

    printCalculations(firstNum, secondNum);
    bye();
})();
