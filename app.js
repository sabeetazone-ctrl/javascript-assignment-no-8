// --- CHAPTERS 31-34: DATE METHODS ---

const output = document.getElementById('general-output');

// 1. Display current date and time
var now = new Date();
output.innerHTML += `<p><strong>Current Date:</strong> ${now}</p>`;

// 2. Alert current month in words
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
alert("Current month: " + months[now.getMonth()]);

// 3. Alert first 3 letters of current day
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
alert("Today is " + days[now.getDay()]);

// 4. Fun Day check
var dayIndex = now.getDay();
if (dayIndex === 0 || dayIndex === 6) {
    output.innerHTML += `<p>It's Fun day!</p>`;
}

// 5. Part of the month
var dateOfMonth = now.getDate();
if (dateOfMonth < 16) {
    output.innerHTML += `<p>First fifteen days of the month</p>`;
} else {
    output.innerHTML += `<p>Last days of the month</p>`;
}

// 6. Minutes since Jan 1, 1970
var millisSince1970 = now.getTime();
var minsSince1970 = millisSince1970 / (1000 * 60);
output.innerHTML += `
    <p>Elapsed milliseconds since January 1, 1970: ${millisSince1970}</p>
    <p>Elapsed minutes since January 1, 1970: ${minsSince1970}</p>
`;

// 7. AM/PM Alert
var hours = now.getHours();
if (hours < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}

// 13. Age/Birth Year Calculator
var userAge = prompt("Enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - userAge;
output.innerHTML += `<p>Your age is ${userAge}<br>Your birth year is ${birthYear}</p>`;

// 14. K-Electric Bill
function generateBill() {
    var customerName = "ABC Customer";
    var currentMonth = months[now.getMonth()];
    var units = 410;
    var chargesPerUnit = 16;
    var lateSurcharge = 350;
    
    var netAmount = units * chargesPerUnit;
    var grossAmount = netAmount + lateSurcharge;

    var billHTML = `
        <div class="bill-header">K-Electric Bill</div>
        <div class="bill-row"><span>Customer Name:</span> <span class="bold-text">${customerName}</span></div>
        <div class="bill-row"><span>Month:</span> <span class="bold-text">${currentMonth}</span></div>
        <div class="bill-row"><span>Number of units:</span> <span class="bold-text">${units}</span></div>
        <div class="bill-row"><span>Charges per unit:</span> <span class="bold-text">${chargesPerUnit}</span></div>
        <br>
        <div class="bill-row"><span>Net Amount Payable (within Due Date):</span> <span class="bold-text">${netAmount.toFixed(2)}</span></div>
        <div class="bill-row"><span>Late Payment Surcharge:</span> <span class="bold-text">${lateSurcharge.toFixed(2)}</span></div>
        <div class="bill-row"><span>Gross Amount Payable (after Due Date):</span> <span class="bold-text">${grossAmount.toFixed(2)}</span></div>
    `;
    document.getElementById('bill-container').innerHTML = billHTML;
}

generateBill();
