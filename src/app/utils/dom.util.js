export function createElement(className = '', content = '', angle = null, style = null) {
    const element = document.createElement('DIV');

    element.className = Array.isArray(className) ? className.join(' ') : className;

    if (typeof content === 'string') {
        element.innerText = content;
    } else if (content) {
        element.appendChild(content);
    }

    if (style) {
        element.style = style;
    }

    if (angle !== null) {
        element.style.transform = `rotate(${ angle }deg)`;
    }

    return element;
}

export function htmlToElement(html) {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstChild;
}

export function toCatElement(name) {
    return htmlToElement(`<img class="cat-img" src="cats/${ name }"></img>`);
}
