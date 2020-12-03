function clock() {
    let dates = new Date();
    let hours = dates.getHours();
    let minutes = dates.getMinutes();
    let seconds = dates.getSeconds();
    let period = 'AM';

    if (hours == 0) {
        hours = 12;
    } if (hours > 12) {
        hours -= 12;
        period = 'PM';
    }

    if (hours < 10) {
        hours = `0${hours}`;
    } if (minutes < 10) {
        minutes = `0${minutes}`;
    } if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    let time = `${hours}
    ${minutes}
    ${seconds}
    ${period}`;
    setInterval(clock, 1000);
    document.getElementById('display').innerText = time;
}

clock();