function isValidSSN(value) {
  return /^\d{3}-\d{2}-\d{4}$/.test(value);
}

function isValidDate(day, month, year) {
  // Use the date class to see if the date parses back sanely as a
  // validation check. Not sure this is a great idea...
  const adjustedMonth = Number(month) - 1;  // JS Date object 0-indexes months. WTF.
  const date = new Date(year, adjustedMonth, day);
  return date.getDate() === Number(day) &&
    date.getMonth() === adjustedMonth &&
    date.getFullYear() === Number(year);
}

// TODO: look into validation libraries (npm "validator")
function isValidPhone(value) {
  return /^\d{3}-\d{3}-\d{4}$/.test(value);
}

function isValidEmail(value) {
  // Comes from StackOverflow: http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
}

// TODO:  1. what is a valid address?
//        2. 6 arguments to a function is ugly...
//        3. argument order is now based on form order... using
function isValidAddress(_street, _city, _country, _state, _zipcode, _county) {
  // arbitraty use of field to keep linter happy until we answer #1
  let n = 0;
  if (_street === '') n++;
  if (_city === '') n++;
  if (_country === '') n++;
  if (_state === '') n++;
  if (_zipcode === '') n++;
  if (_county === '') n++;
  return true;
}

export {
  isValidDate,
  isValidSSN,
  isValidPhone,
  isValidEmail,
  isValidAddress
};
