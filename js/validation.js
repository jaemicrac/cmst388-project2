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

  // Final Decision
  if (errorMessage !== "") {
    alert("Please correct the following errors:\n\n + errorMessage);
    return false; 
  } else {
    alert("Form submitted successfully!");
    return true; 
  }
}

// Reset Event Handler 
function handleReset() {
  const confirmReset = confirm("Are you sure you want to clear the entire form?");

  if (confirmReset) {
    const fields = ['firstName', 'lastName', 'address', 'city', 'zipCode', 'phoneArea', 'phoneNumber', 'email', 'confirmEmail', 'comments'];

    fields.forEach(id => {
      document.getElementByID(id).value = "";
    });

    document.getElementById('state').selectedIndex = 0;

    document.getElementById('contactError').style.display = "none";

    return true;
  }
  return false:
}
