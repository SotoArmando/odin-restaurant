const Home = (parentNode) => {
    const node = document.createElement('div');
    // Add whichever sub-nodes, ids and style is required
    node.innerHTML = `<first-content>
    <img src="svg/baker.svg" alt="Kiwi standing on oval" width="225" style="display: block;align-self: center;">
    <span>
        Hi! am <b>cheftie</b> welcome to my bussines. this is my Restaurant and am very happy to see you here :)
        ask me anything * we got no that so ... , just order if you like some water :D .
        <input type="button" value="Order water :D" />
        <input type="button" value="Order something else" />
    </span>
    </first-content>
    `;
    parentNode.appendChild(node);
};

export { Home };