export function renderCandy(candy) {
    const div = document.createElement('div');
    div.classList.add('candy');

    div.append(div);
    return div;
}