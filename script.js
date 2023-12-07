function startCountdown() {
    var warningElement = document.getElementById('warning');
    var countdownElement = document.getElementById('countdown');
    var totalTime = 10; // Set a smaller value for testing (10 seconds)

    function updateCountdown() {
        var hours = Math.floor(totalTime / 3600);
        var minutes = Math.floor((totalTime % 3600) / 60);
        var seconds = totalTime % 60;

        countdownElement.textContent = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);

        if (totalTime > 0) {
            totalTime--;
        } else {
            clearInterval(countdownInterval);
            // Display "TIME IS UP!" message in red and make it flash
            flashText("TIME IS UP!", countdownElement, "red");
            // Hide the warning text
            warningElement.style.visibility = 'hidden';
            clearInterval(flashInterval); // Clear the flashing interval for the warning text
        }
    }

    function pad(value) {
        return value < 10 ? '0' + value : value;
    }

    function flashText(text, element, color) {
        var flashInterval = setInterval(function() {
            element.style.color = (element.style.color === 'transparent' ? color : 'transparent');
        }, 500); // Adjust the interval as needed

        // Stop flashing after a certain duration
        setTimeout(function() {
            clearInterval(flashInterval);
            // Set the final color
            element.style.color = color;
            // Display the text
            element.textContent = text;
        }, 5000); // Adjust the duration as needed
    }

    updateCountdown(); // Update initial display
    var countdownInterval = setInterval(updateCountdown, 1000);

    // Flashing effect for the warning text
    var flashInterval = setInterval(function() {
        warningElement.style.visibility = (warningElement.style.visibility === 'hidden' ? 'visible' : 'hidden');
    }, 500); // Adjust the interval as needed
}

window.onload = startCountdown;
