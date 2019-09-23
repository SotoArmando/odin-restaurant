const About = (parentNode) => {
    const node = document.createElement('div');
    // Add whichever sub-nodes, ids and style is required
    node.innerHTML = `<second-content>
    <img src="svg/baker.svg" alt="Kiwi standing on oval" width="225" style="display: block;align-self: center;">
    <span>
        We good doing all you can ask to :D, rigth now not but it is cause there is no more ingredients srry ;s.
    </span>
    </second-content>
    `;
    parentNode.appendChild(node);
};

export { About };