/**
 * 
 * @param {keyof HTMLElementTagNameMap} elementType 
 * @param {*} html 
 */
function ViewRender(elementType, html) {
    const element = document.createElement(elementType);
    element.innerHTML = html;
    document.body.appendChild(element);
}
