const startAmount = 464_576_230.62; // Initial amount
const annualInterestRate = 0.09; // 9% interest rate

document.addEventListener('DOMContentLoaded', function () {

    // Calculate interest per second, minute, hour, and year
    const interestPerSecond = startAmount * annualInterestRate / 365 / 24 / 60 / 60;
    const interestPerMinute = interestPerSecond * 60;
    const interestPerHour = interestPerSecond * 60 * 60;
    const interestPerDay = interestPerSecond * 60 * 60 * 24;
    const interestPerYear = startAmount * annualInterestRate;

    // Update the HTML with calculated values
    document.getElementById('interestPerSecond').innerText = formatCurrency(interestPerSecond);
    document.getElementById('interestPerMinute').innerText = formatCurrency(interestPerMinute);
    document.getElementById('interestPerHour').innerText = formatCurrency(interestPerHour);
    document.getElementById('interestPerDay').innerText = formatCurrency(interestPerDay);
    document.getElementById('interestPerYear').innerText = formatCurrency(interestPerYear);
    document.getElementById('currentAmount').innerText = formatCurrency(getCurrentAmount(startAmount));

    setInterval(function () {
        document.getElementById('currentAmount').innerText = formatCurrency(getCurrentAmount(startAmount));
    }, 100); // Update every second

});

function getCurrentAmount() {
    // Get the current date and time
    const currentDate = new Date();
    const startDate = new Date('2024-02-22');

    // Calculate the elapsed time in milliseconds
    const elapsedTime = currentDate - startDate;

    // Convert elapsed time to years
    const elapsedTimeInYears = elapsedTime / (1000 * 60 * 60 * 24 * 365);
    // Calculate the interest gained over the elapsed time
    const interestGained = startAmount * annualInterestRate * elapsedTimeInYears;

    // Update the current amount with the interest gained
    return startAmount + interestGained;
}

// Function to format currency
function formatCurrency(amount) {
    return '$' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}




var originalBG = $("html").css("background-color");
console.log(originalBG);
var lightColor = originalBG;// "rgba(0.1, 0.1, 0.1, .1)";
console.log(lightColor);
var gradientSize = 256;
$('html').mousemove(function (e) {
    x = e.pageX - this.offsetLeft;
    y = e.pageY - this.offsetTop;
    xy = x + " " + y;
    bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", " + gradientSize + ", from(rgba(255,200,255,0.1)), to(rgba(255,255,255,0.0))), " + originalBG;
    bgMoz = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lightColor + " 0%, " + originalBG + " " + gradientSize + "px)";

    $("html")
        .css({ background: bgWebKit })
        .css({ background: bgMoz });
}).mouseleave(function () {
    $("html").css({
        background: originalBG
    });
});