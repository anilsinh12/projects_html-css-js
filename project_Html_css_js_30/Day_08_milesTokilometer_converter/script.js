function convert() {
    var milesInput = document.getElementById('miles');
    var kilometers = milesInput.value * 1.60934;
    var result = document.getElementById('result');
    result.textContent = milesInput.value + " miles is equal to " + kilometers.toFixed(2) + " kilometers.";
  }