
let countdown = document.querySelector('.countdown');
function countDown(seconds) {
    let counter = seconds;
    const interval = setInterval(() => {
        if (counter < 1) {
            clearInterval(interval);
        }
        let minute = parseInt(counter / 60);
        let sec = (counter % 60) < 10 ? `0${(counter % 60)}` : (counter % 60);
        let rs = `${minute}:${sec}`;
        countdown.innerText = rs;
        counter--;
    }, 1000);
}
countDown(109);