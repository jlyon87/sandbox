const phone = "444.555.1234";
const split = /(\d{3})(\d{3})(\d{4})/;
const isValidPhone = /([-()_.+ ]*\d[-()_.+ ]*){10,}/;
const nonDigits = /\D/g;

console.log("isValid", isValidPhone.test(phone));
if(isValidPhone.test(phone)) {
  const pieces = phone.replace(nonDigits, "").match(split);
  console.log("pieces", JSON.stringify(pieces, null, 2));
}
