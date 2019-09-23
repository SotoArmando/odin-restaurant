const Contact_Us = (parentNode) => {
    const node = document.createElement('div');
    // Add whichever sub-nodes, ids and style is required
    node.innerHTML = `<third-content>
    <img src="svg/baker.svg" alt="Kiwi standing on oval" width="225" style="display: block;align-self: center;">
    <span>
       You can find us next corner ya see this day. well be there ... i promise :v :D.
    </span>
    </third-content>`;
    parentNode.appendChild(node);
};

export { Contact_Us };