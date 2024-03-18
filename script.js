document.querySelector(".btn-primary").addEventListener("click", function() {
    let codeInputs = document.querySelectorAll(".code");
    let generatedOTP = generateOTP();
    codeInputs.forEach((input, index) => {
      input.value = generatedOTP[index];
    });
  });
  
  function generateOTP() {
    let otp = "";
    for (let i = 0; i < 6; i++) {
      otp += Math.floor(Math.random() * 10);
    }
    return otp;
  }
  