console.log("am a frog not a virus trust me ;)")

const space = [
    document.querySelector("first-content"),
    document.querySelector("second-content"),
    document.querySelector("third-content")
];

console.log(space);

document.querySelector("first-content").style.display = ""
document.querySelector("second-content").style.display = "none"
document.querySelector("third-content").style.display = "none"

const openHome  = () => {
    document.querySelector("first-content").style.display = ""
    document.querySelector("second-content").style.display = "none"
    document.querySelector("third-content").style.display = "none"
}

const openAboutUs = () => {
    document.querySelector("first-content").style.display = "none"
    document.querySelector("second-content").style.display = ""
    document.querySelector("third-content").style.display = "none"
}

const openContactUs = () => {
    document.querySelector("first-content").style.display = "none"
    document.querySelector("second-content").style.display = "none"
    document.querySelector("third-content").style.display = ""
}

document.getElementById("OpenHome").addEventListener("click", openHome);
document.getElementById("OpenAboutUs").addEventListener("click", openAboutUs);
document.getElementById("OpenContactUs").addEventListener("click", openContactUs);