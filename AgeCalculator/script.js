function calculateAge() {
  const dobInput = document.getElementById("dob");
  const resultParagraph = document.getElementById("result");

  // Check if the date of birth is provided
  if (dobInput.value !== "") {
    const dob = new Date(dobInput.value);
    const today = new Date();

    // Calculate the age in milliseconds
    const ageInMilliseconds = today - dob;

    // Convert milliseconds to seconds, minutes, hours, and days
    const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
    const ageInMinutes = Math.floor(ageInSeconds / 60);
    const ageInHours = Math.floor(ageInMinutes / 60);
    const ageInDays = Math.floor(ageInHours / 24);
    const ageInMonths = Math.floor(ageInDays / 30); // Assuming each month has 30 days
    const ageInYears = Math.floor(ageInDays / 365);

    // Display the result
    resultParagraph.innerHTML = `
            Your age is approximately:
            <ul>
                <li>${ageInSeconds.toLocaleString()} seconds</li>
                <li>${ageInMinutes.toLocaleString()} minutes</li>
                <li>${ageInHours.toLocaleString()} hours</li>
                <li>${ageInDays.toLocaleString()} days</li>
                <li>${ageInMonths.toLocaleString()} months</li>
                <li>${ageInYears.toLocaleString()} years</li>
            </ul>
        `;
  } else {
    resultParagraph.textContent = "Please enter your date of birth.";
  }
}

// function calculateAge() {
//   const dobInput = document.getElementById("dob");
//   const resultParagraph = document.getElementById("result");

//   // Check if the date of birth is provided
//   if (dobInput.value !== "") {
//     const dob = new Date(dobInput.value);
//     const today = new Date();

//     // Calculate the age
//     let ageYears = today.getFullYear() - dob.getFullYear();
//     let ageMonths = today.getMonth() - dob.getMonth();
//     let ageDays = today.getDate() - dob.getDate();

//     // Adjust the age if birthdate hasn't occurred yet this year
//     if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
//       ageYears--;
//       ageMonths = 12 + ageMonths;
//       ageDays = 30 + ageDays; // Assuming each month has 30 days
//     }

//     // Build the age string
//     let ageString = "";

//     if (ageYears > 0) {
//       ageString += `${ageYears} ${ageYears === 1 ? "year" : "years"}`;
//     }

//     if (ageMonths > 0) {
//       ageString += ` ${ageMonths} ${ageMonths === 1 ? "month" : "months"}`;
//     }

//     if (ageDays > 0) {
//       ageString += ` ${ageDays} ${ageDays === 1 ? "day" : "days"}`;
//     }

//     // Display the result
//     resultParagraph.textContent = `Your age is ${ageString}.`;
//   } else {
//     resultParagraph.textContent = "Please enter your date of birth.";
//   }
// }

// function calculateAge() {
//   const dobInput = document.getElementById("dob");
//   const resultParagraph = document.getElementById("result");

//   // Check if the date of birth is provided
//   if (dobInput.value !== "") {
//     const dob = new Date(dobInput.value);
//     const today = new Date();
//     const age = today.getFullYear() - dob.getFullYear();

//     // Check if the birthday has occurred this year
//     if (
//       today.getMonth() < dob.getMonth() ||
//       (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
//     ) {
//       resultParagraph.textContent = `Your age is ${age - 1} years.`;
//     } else {
//       resultParagraph.textContent = `Your age is ${age} years.`;
//     }
//   } else {
//     resultParagraph.textContent = "Please enter your date of birth.";
//   }
// }
