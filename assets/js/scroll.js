window.onscroll = function (e) {
    let value = window.scrollY;

    let h2 = document.getElementById("cover-header");
    let layer0 = document.getElementById("layer0");
    let layer1 = document.getElementById("layer1");
    let layer2 = document.getElementById("layer2");
    let layer3 = document.getElementById("layer3")

    h2.style.marginTop = value * 1.6 + "px";
    layer0.style.top = value * 2.21 + "px";
    layer1.style.top = value + "px";
    if (window.innerWidth > 800) {

        layer2.style.top = value * -10.2 + "px !important";
        layer3.style.top = value * -0.1 + "px";
    }

}



