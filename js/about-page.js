const birthDate = new Date('2007-06-10'); // replace with your actual birthdate

  function updateAge() {
    const now = new Date();
    const diffInMilliseconds = now - birthDate;
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.2425; // average year length
    const ageInYears = diffInMilliseconds / millisecondsInYear;
    document.getElementById('age').textContent = ageInYears.toFixed(9); // up to 9 decimals
  }

updateAge(); // initial call