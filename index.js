function calculateTip() {
    const billElement = document.getElementById('bill');
    const percentageTipElement = document.getElementById('percentageTip');

    const bill = Math.abs(parseInt(billElement.value));
    const tipPercentage = Math.abs(parseInt(percentageTipElement.value));

    billElement.value = bill;
    percentageTipElement.value = tipPercentage;

    const totalTip = Math.floor((bill * tipPercentage)) / 100;
    const totalToPay = bill + totalTip;
    
    document.getElementById('tipAmount').innerText = totalTip;
    document.getElementById('totalPay').innerText = totalToPay;

}

function resetCalculator() {   document.getElementById("bill").value = "";   document.getElementById("percentageTip").value = "";   document.getElementById("tipAmount").innerText = "";   document.getElementById("totalPay").innerText = ""; }