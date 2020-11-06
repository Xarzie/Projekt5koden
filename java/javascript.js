/* Oprydning af tekstfelter
Oprydnign af navn */
function kunbogstavernavn(oprydningsbogstav) {
    var regexnavn = /[^a-z æøå]/i;
    if (oprydningsbogstav.value.search(regexnavn) > - 1) {
        oprydningsbogstav.value = oprydningsbogstav.value.replace(regexnavn, "")
        document.getElementById('forkerttegn').innerHTML = "Dette felt tillader kun a-å"
    } else {
        document.getElementById('forkerttegn').innerHTML = ""
    }
}
/* mail oprydning */
function kunbogstavermail(oprydningsbogstavmail) {
    var regexmail = /[^a-z æøå0-9.@]/i;
    if (oprydningsbogstavmail.value.search(regexmail) > - 1) {
        oprydningsbogstavmail.value = oprydningsbogstavmail.value.replace(regexmail, "")
        document.getElementById('forkerttegnmail').innerHTML = "Dette felt tillader kun a-å tal fra 0-9 og @ samt ."
    } else {
        document.getElementById('forkerttegnmail').innerHTML = ""
    }
}
/* Emne oprydning */
function kunbogstaveremne(oprydningsbogstavemne) {
    var regexemne = /[^a-z æøå0-9.,]/i;
    if (oprydningsbogstavemne.value.search(regexemne) > - 1) {
        oprydningsbogstavemne.value = oprydningsbogstavemne.value.replace(regexemne, "")
        document.getElementById('forkerttegnemne').innerHTML = "Dette felt tillader kun a-å tal fra 0-9 samt , . "
    } else {
        document.getElementById('forkerttegnemne').innerHTML = ""
    }
}
/* burgermenu */
function toggleNavPanel(x) {
    var panel = document.getElementById(x), navarrow = document.getElementById("navarrow"), maxH = "600px"; /* max længde af container skal være større end Css value */
    if (panel.style.height == maxH) {
        panel.style.height = "0px";
        navarrow.innerHTML = "&#9776";
    } else {
        panel.style.height = maxH;
        navarrow.innerHTML = "&#9776";
    }
}


/* lasses kode */

let image1 = { src: "img1.png", alt: "Bannerbillede1", bannertext: "Omsorg for mennesker" };
let image2 = { src: "img2.png", alt: "bannerbillede2", bannertext: "Ligelig fordeling af ressourcer" };
let image3 = { src: "img3.png", alt: "bannerbilled3", bannertext: "Omsorg for Jorden" };

var images = [image1, image2, image3,];

window.onload = function () {
    for (i = 0; i < images.length; i++) {
        var nr = images[i];
        var elem = document.createElement("div");
        elem.id = "sliderId_" + [i];
        elem.className = "slide";
        elem.setAttribute('style', 'opacity: 0;');
        document.getElementById("imageSlides").appendChild(elem);
        if (i == 0) {
            elem.setAttribute('style', 'opacity: 1;');
        }
        if (i == i) {
            var elem2 = document.createElement("img");
            elem2.src = ("src", "picture/" + nr.src);
            elem2.alt = ("alt", +nr.alt);
            document.getElementById("sliderId_" + [i]).appendChild(elem2);
            var elem3 = document.createElement("h3");
            var h = document.createTextNode(nr.bannertext);
            elem3.appendChild(h);
            document.getElementById("sliderId_" + [i]).appendChild(elem3);
        }
    }
}
let x = 1;
let prev = 0;

function slide() {
    document.getElementById("sliderId_" + x).style.opacity = 1;
    document.getElementById("sliderId_" + prev).style.opacity = 0;
    console.log("x = " + x);
    prev = x;
    if (x === images.length - 1) {
        x = 0;
    } else {
        x++;
    }
}
setInterval(slide, 3000);
