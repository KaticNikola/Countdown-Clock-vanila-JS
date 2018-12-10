

function countdown(){
    let now = new Date();
    let eventDate = new Date(2019, 12, 31);

    let currentTime = now.getTime();
    let eventTime = eventDate.getTime();

    let remTime = eventTime - currentTime;

    let s = Math.floor(remTime / 1000);
    let m = Math.floor( s / 60);
    let h = Math.floor( m / 60);
    let d = Math.floor( h / 24 );

    s %= 60;
    m %= 60;
    h %= 24;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.querySelector('#days').innerHTML = d;
    document.querySelector('#hours').innerHTML = h;
    document.querySelector('#minutes').innerHTML = m;
    document.querySelector('#seconds').innerHTML = s;

    setTimeout(countdown, 1000);
};
countdown();
