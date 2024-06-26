function generate(d = 0) {
    fetch("/uji_coba24/component/item.html")
        .then(data => data.text())
        .then(data => {
            console.log(data)

            const inner = document.getElementById("inner");
            if (d == 0)
                inner.innerHTML += data
            else
                inner.innerHTML = data.repeat(d)
        })
}

function show_detail(id) {
    fetch("/uji_coba24/component/detail.html")
        .then(data => data.text())
        .then(data => {

            Swal.fire({

                html: data,
                showCloseButton: true,
                showCancelButton: false,
                showConfirmButton: false,
            });
        })
}


function show_poster(id) {
    const detail = document.getElementById("detail-itm")
    fetch("/uji_coba24/component/poster.html")
        .then(m => m.text())
        .then(m => {
            detail.innerHTML = m;
        })
}
function show_video(id) {
    document.get
    const detail = document.getElementById("detail-itm")
    fetch("/uji_coba24/component/video.html")
        .then(m => m.text())
        .then(m => {
            detail.innerHTML = m;
            const y = document.getElementById("ytplayer")
            if (y.offsetWidth > 450)
                y.style.height = (y.offsetWidth * 0.6625) + "px";
            else
                y.style.height = (y.offsetWidth * 0.6625) + "px";

        })
}
function vote2(id, t) {
    fetch("/uji_coba/component/toast.html")
        .then(m => m.text())
        .then((m) => {
            if (t.getAttribute("data") == "false") {
                t.childNodes[1].setAttribute("class", "fa fa-check mx-2 fa-lg text-success")
                t.setAttribute("data", "true")
                t.style.border = "3px solid rgba(19, 202, 34, 0.897)"
            }
            else {
                t.childNodes[1].setAttribute("class", "fas fa-vote-yea mx-2 fa-lg text-warning")
                t.setAttribute("data", "false")
                t.style.border = "3px solid rgba(202, 144, 19, 0.897)"
            }
        })
}