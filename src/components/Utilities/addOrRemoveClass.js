export const addOrRemoveClass = (elem,method,prop) => {
    switch (method) {
        case 'add':
            elem.classList.add(prop);
            break;
        case 'remove':
            elem.classList.remove(prop);
            break;
        case 'toggle':
            elem.classList.toggle(prop);
    }
}