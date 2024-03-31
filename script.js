function AmountChange(){
    document.getElementById("txtAmount").value = document.getElementById("amountSlider").value;
}
function YearChange(){
    document.getElementById("txtYears").value = document.getElementById("yearSlider").value;
}
function RateChange() {
    document.getElementById("txtRate").value = document.getElementById("rateSlider").value;
}
function CalculateClick(){
    var P = parseInt(document.getElementById("txtAmount").value);
    var N = parseInt(document.getElementById("txtYears").value) * 12;
    var R = parseFloat(document.getElementById("txtRate").value)/12/100;
    /*
     P * R *(1+R)^N / [(1+R)^N-1] where,
    N is 10 years or 120 months
    R is 7.2%/12/100 = 0.006
    EMI = Rs 10,00,00 * 0.006 *(1+0.006)120/((1+0.006)120-1) = Rs 11,714
     */
   
   var EMI = P * R * (Math.pow(1+R),N) / (Math.pow(1+R),N) - 1;
   document.getElementById("lblResult").innerHTML = "Monthly Installment :" + Math.round(EMI).toLocaleString('en-in', {style:'currency', currency: 'INR'});
}
