export default {
  uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
  },
  dateToString (date) {
    if (!date) return ''
    var year = date.getFullYear()
    var month = (date.getMonth() + 1).toString()
    var day = (date.getDate()).toString()
    var hour = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()
    if (month.length == 1) {
      month = "0" + month
    }
    if (day.length == 1) {
      day = "0" + day
    }
    if (hour < 10) {
      hour = '0' + hour
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }
    if (seconds < 10) {
      seconds = '0' + seconds
    }
    return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
  },
  stringToDate (date) {
    if (!date) return null
    let dateArr = date.split(' ')
    let dayArr = dateArr[0].split('-')
    let timeArr = dateArr[1].split(':')
    return new Date(parent(dayArr[0]), parseInt(dayArr[1]) - 1, parseInt(dayArr[2]), parseInt(timeArr[0]), parseInt(timeArr[1]), parseInt(timeArr[2]))
  }
}