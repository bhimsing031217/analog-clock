setInterval(() => {
    dt = new Date();

    htime = dt.getHours();
    mtime = dt.getMinutes();
    stime = dt.getSeconds();

    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;
}, 1000);
