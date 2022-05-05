export function renderCandy(candy) {
    const div = document.createElement('div');
    div.classList.add('candy');

    const h1 = document.createElement('h1');
    h1.textContent = candy.name;
    
    const img = document.createElement('img');
    img.textContent = candy.name;




    div.append(div);
    return div;
}