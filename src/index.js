
const content1 = `<first-content>
<img src="svg/baker.svg" alt="Kiwi standing on oval" width="225" style="display: block;align-self: center;">
<span>
    Hi! am <b>cheftie</b> welcome to my bussines. this is my Restaurant and am very happy to see you here :)
    ask me anything * we got no that so ... , just order if you like some water :D .
    <input type="button" value="Order water :D" />
    <input type="button" value="Order something else" />
</span>
</first-content>
`

const content2 = `<second-content>
<img src="svg/baker.svg" alt="Kiwi standing on oval" width="225" style="display: block;align-self: center;">
<span>
    We good doing all you can ask to :D, rigth now not but it is cause there is no more ingredients srry ;s.
</span>
</second-content>
`

const content3 = `<third-content>
<img src="svg/baker.svg" alt="Kiwi standing on oval" width="225" style="display: block;align-self: center;">
<span>
   You can find us next corner ya see this day. well be there ... i promise :v :D.
</span>
</third-content>`

document.querySelector("wrapper").innerHTML = content1;

const openHome = () => {
    document.querySelector("wrapper").innerHTML = content1;
}

const openAboutUs = () => {
    document.querySelector("wrapper").innerHTML = content2;
}

const openContactUs = () => {
    document.querySelector("wrapper").innerHTML = content3;
}

document.getElementById("OpenHome").addEventListener("click", openHome);
document.getElementById("OpenAboutUs").addEventListener("click", openAboutUs);
document.getElementById("OpenContactUs").addEventListener("click", openContactUs);