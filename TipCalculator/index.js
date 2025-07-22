function CalculateTip(event) {
  event.preventDefault()
        const billamount = parseFloat(document.getElementById("billamount").value);
        const percentage= parseFloat(document.getElementById("percentage").value);
        const errorMessage = document.getElementById("error-image");
        const tipAmountInput = document.getElementById("tipamount");
        const totalAmountInput = document.getElementById("total");
        console.log(billamount);
        console.log(percentage);

        if (isNaN(billamount) || isNaN(percentage) || billamount < 0 || percentage < 0) {
          errorMessage.textContent = "Please enter valid numbers for bill and tip percentage.";
          tipAmountInput.value = "";
          totalAmountInput.value = "";
          return;
        }

        const tip = (billamount * percentage) / 100;
        const total = billamount + tip;

        tipAmountInput.value = tip.toFixed(2);
        totalAmountInput.value = total.toFixed(2);
        errorMessage.textContent = "";
      }
