function getTimezoneOffsetHours() {
const date = new Date();
return date.getTimezoneOffsetHours() / 60;
}
module.exports = getTimezoneOffsetHours;