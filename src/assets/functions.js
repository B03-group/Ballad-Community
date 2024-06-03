export function getDate(dateTime, longOrShort) {
  const date = dateTime ? new Date(dateTime) : new Date();
  const hour = changeHour(date.getHours());
  const time = checkHour(date.getHours());
  const minutes = date.getMinutes().toString().padStart(2, '0');

  if (longOrShort === 'long') {
    return date.getFullYear() + '년 ' + (date.getMonth() + 1) + '월 ' + date.getDate() + '일';
  } else if (longOrShort === 'short') {
    return time + ' ' + hour + ':' + minutes;
  } else {
    return alert('wrong args');
  }
}

function changeHour(hour) {
  if (hour > 12) {
    return hour - 12;
  }

  return hour;
}

function checkHour(hour) {
  if (hour >= 12) {
    return '오후';
  } else {
    return '오전';
  }
}
