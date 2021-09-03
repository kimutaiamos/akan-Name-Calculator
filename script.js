function getAkanName() {
    let yearOfBirth = parseInt (document.getElementById("year-input").value);
    let monthOfBirth = parseInt(document.getElementById("month-input").value);
    let dayOfBirth = parseInt(document.getElementById("day-input").value);
  
    let genders = document.getElementsByName("gender");
}

    function dayValidator() {
        if (monthOfBirth === 2 && Number(yearOfBirth) % 4 === 0) {
          if (dayOfBirth > 28 || dayOfBirth < 1) {
            return false;
          } else if (monthOfBirth === 2 && dayOfBirth > 29) {
            return false;
          } else if (monthOfBirth === 2 && dayOfBirth < 1) {
            return false;
          } else {
            return true;
          }
        } else if (dayOfBirth < 1 || dayOfBirth > 31) {
          return false;
        } else {
          return true;
        }
      }
      function monthValidator() {
        if (monthOfBirth < 1 || monthOfBirth > 12) {
            return false;
          } else {
            return true;
          }
        }
      }

      let monthValid=monthValidator();
      let dayValid=dayValidator();

      
  // let dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0, 2)) / 4) - 2 * Number(yearOfBirth.slice(0, 2)) - 1) +
  // ((5 * Number(yearOfBirth.slice(2, 4)) / 4)) + ((26 * (monthOfBirth + 1) / 10)) + dayOfBirth) % 7);

  if (monthOfBirth < 3) {
    monthOfBirth += 12;
    yearOfBirth--;
}
let dayOfWeekNumber  = (dayOfBirth + parseInt(((monthOfBirth + 1) * 26) / 10) + yearOfBirth + parseInt(yearOfBirth / 4) + 6 * parseInt(yearOfBirth / 100) + parseInt(yearOfBirth / 400) - 1) % 7;


let maleAkanNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
  ];

  let femaleAkanNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
  ];

  function getGender() {
    for (let gender of genders) {
      if (gender.checked) {
        return gender.value;
      }
    }
  }

  let myGenderValue = getGender();

  console.log(myGenderValue);