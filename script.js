
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');


let last;
function render(now) {
    if (!last) {
        last = now
    }

    const elapsed = now - last;
    if(elapsed > 1000) {
        last = now;
        const date = new Date(new Date().getTime() - 16200000);
        hours.innerHTML = date.getHours().toString().padStart(2,'0');
        minutes.innerHTML = date.getMinutes().toString().padStart(2,'0');;
        seconds.innerHTML = date.getSeconds().toString().padStart(2,'0');
    }
    requestAnimationFrame(render)

}

requestAnimationFrame(render)