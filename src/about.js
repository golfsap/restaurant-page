
const renderAboutPage = () => {
    const container = document.getElementById("content");
    container.textContent = '';

    const header = document.createElement("h1");
    header.textContent = "About Odin's Cafe";
    container.appendChild(header);

    const description = document.createElement("p");
    const node = document.createTextNode("Our ingredients are of the finest quality and imported directly from their source of origin. Our baked goods are freshly made in store every morning by our lovely bakers. Come find us and see for yourself.");
    description.appendChild(node);
    container.appendChild(description);

    const hours = document.createElement('h2');
    hours.textContent = 'Open every day 7 - 5pm';
    const locationPara = document.createElement('p');
    const para = document.createTextNode("11:11 Main St, Bangkok, Thailand");
    locationPara.appendChild(para);
    container.appendChild(hours);
    container.appendChild(locationPara);
}

export { renderAboutPage };