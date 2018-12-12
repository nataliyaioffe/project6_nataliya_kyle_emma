const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let date = new Date();
let dd = date.getDate();
let mm = months[date.getMonth()];
let yyyy = date.getFullYear();
let hours = date.getHours();
let mins = date.getMinutes();

date = mm + " " + dd + ", " + yyyy;

export default date;
