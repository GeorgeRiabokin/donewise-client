/**
 * 
 * @param {keyof HTMLElementTagNameMap} elementType 
 * @param {*} html
 * @param {string} className
 * @param {HTMLObjectElement} parentElement
 * @returns {HTMLObjectElement} 
 */
function ViewRender(
    elementType, 
    html, 
    className = null,
    parentElement = null
) {
    const element = document.createElement(elementType);
    element.innerHTML = html;
    if (className) {
        element.classList.add(className);
    }

    const parent = parentElement || document.body;
    parent.appendChild(element);
    return element;
}

export default ViewRender;
