/**
 * 
 * @param {keyof HTMLElementTagNameMap} elementType 
 * @param {*} html
 * @param {string} className
 */
function ViewRender(elementType, html, className = null) {
    const element = document.createElement(elementType);
    element.innerHTML = html;
    if (className) {
        element.classList.add(className);
    }
    document.body.appendChild(element);
}

export default ViewRender;
