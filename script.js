console.log('Hello World');
//document.getElementById('')
//document.querySelector('')

//Total Balance
const balanceElement = document.getElementById('balance');
console.log(balanceElement);

// Value input
const valueInputElement = document.querySelector('input');
console.log(valueInputElement);

//income or expense
const selectElement = document.querySelector('select');
console.log(selectElement);

//Addition button
const additionButtonElement = document.querySelector('footer button');
console.log(additionButtonElement);

// Entry list
const entryListElement = document.querySelector('section  ul');
console.log(entryListElement);

function addEntry(amount, operation) {
    const listEntry = document.createElement('li');
    listEntry.classList.add(operation);

    const listEntryValue = document.createElement('strong');
    listEntryValue.innerText = amount + '$';

    const listEntryDescription = document.createElement('em');
    listEntryDescription.innerText = 'Description';

    const listEntryOperator = document.createElement('span');

    if (operation === 'income') {
        listEntryOperator.innerText = '+';
    } else if (operation === 'expense') {
        listEntryOperator.innerText = '-';
    }

    listEntry.appendChild(listEntryDescription);
    listEntry.appendChild(listEntryOperator);
    listEntry.appendChild(listEntryValue);

    entryListElement.appendChild(listEntry);
}

function updateBalance() {
    let total = 0;
    console.log(entryListElement.children);
    for (let item of entryListElement.children) {
        console.log(item);
        const valueElement = item.querySelector('strong');
        const operationElement = item.querySelector('span');

        const value = parseInt(valueElement.innerText);
        const operation = operationElement.innerText;

        if (operation === '+') {
            total = total + value;
        } else if (operation === '-') {
            total = total - value;
        }
    }
    balanceElement.innerText = total + '$';
}

additionButtonElement.onclick = function () {
    console.log('Button was clicked');
    const amount = valueInputElement.value;
    const operation = selectElement.value;
    console.log(amount, operation);

    addEntry(amount, operation);
    valueInputElement.value = '';

    updateBalance();
};

//you can add a description
// you can allow users to remove entries
