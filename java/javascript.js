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
