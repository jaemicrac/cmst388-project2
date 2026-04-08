// Submit Button Event Handler
function validateForm() {
  let errorMessage = ""; 

  // Name Validation
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const alphaRegex = /^[A-Za-z]+$/; // Regex for Alpha-only characters

  if(firstName === "Enter First Name" || lastName === "Enter Last Name") {
    errorMessage += "- Please replace default name text with your actual name. \n";
  } else if (!alphaRegex.test(firstName) || !alphaRegex.test(lastName)) {
    errorMessage += "- First and Last Name must contain letters only. \n";
  }

  // Email Match Validation 
  const email = document.getElementById('email').value;
  const confirmEmail = document.getElementById('confirmEmail').value;
  if (email !== confirmEmail) {
    errorMessage += "- Your e-mail addresses do not match. \n";
  }

  // Contact Method Validation 
  const checkedMethods = document.querySelectorAll('input[name="contactMethod"]:checked');
  if (checkedMethods.length < 2) {
    errorMessage += "- Please select at least two contact methods. \n";
  }

  // Final 
  if (errorMessage !== "") {
    alert("Please correct the following errors:\n\n + errorMessage);
    return false; 
  } else {
    alert("Form submitted successfully!");
    return true; 
  }
}
