export function renderCandy(candy) {
    const div = document.createElement('div');
    div.classList.add('candy');

    const h1 = document.createElement('h1');
    h1.textContent = candy.name;

    const img = document.createElement('img');
    img.src = candy.image;

    const p = document.createElement('p');
    p.textContent = `${candy.name} are delicious, they cost ${price.candy}, they rank ${ranking.candy}`;

    const h2 = document.createElement('h2');
    h2.textContent = 'Categories';

    const ul = document.createElement('ul');
    for (let candy of candy.categories) {
        const li = document.createElement('li');
        li.textContent = categories;
        ul.append(li);
    }




    div.append(div);
    return div;
}