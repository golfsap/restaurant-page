const renderMenuPage = () => {
    const container = document.getElementById("content");
    container.textContent = '';

    // Create header
    const header = document.createElement("h1");
    header.textContent = "Odin's Cafe Menu";
    container.appendChild(header);

    // Menu Section
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');
    container.appendChild(menuDiv);

    const drinksHeader = document.createElement("h2");
    drinksHeader.textContent = 'Drinks';
    menuDiv.appendChild(drinksHeader);

    const list = document.createElement("ul");
    menuDiv.appendChild(list);

    const drinks = ['Latte', "Americano", 'Matcha latte', 'Hojicha', 'Strawberry matcha latte', 'Coconut matcha cold foam', 'Dark chocolate slushie'];

    drinks.forEach((drink) => {
        const li = document.createElement("li");
        li.textContent = drink;
        list.appendChild(li);
    })

    // Bakery Menu
    const bakeryHeader = document.createElement("h2");
    bakeryHeader.textContent = 'Bakery items';
    menuDiv.appendChild(bakeryHeader);

    const list2 = document.createElement("ul");
    menuDiv.appendChild(list2);

    const bakery = ['Croissant', "Pain au chocolate", 'Almond croissant', 'Croffle', 'Carrot cake', 'Egg tart', 'Banana bread'];

    bakery.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        list2.appendChild(li);
    })

    // content.appendChild(container);
}

export { renderMenuPage };