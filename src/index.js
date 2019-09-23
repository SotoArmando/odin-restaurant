
import { About } from "./js/About";
import { Contact_Us } from "./js/Contact_Us";
import { Home } from "./js/Home";

console.log(Home)
Home(document.querySelector("wrapper"));

const openHome = () => {
    document.querySelector("wrapper").innerHTML = "";
    Home(document.querySelector("wrapper"));
}

const openAboutUs = () => {
    document.querySelector("wrapper").innerHTML = "";
    About(document.querySelector("wrapper"));
}

const openContactUs = () => {
    document.querySelector("wrapper").innerHTML = "";
    Contact_Us(document.querySelector("wrapper"));
}

document.getElementById("OpenHome").addEventListener("click", openHome);
document.getElementById("OpenAboutUs").addEventListener("click", openAboutUs);
document.getElementById("OpenContactUs").addEventListener("click", openContactUs);