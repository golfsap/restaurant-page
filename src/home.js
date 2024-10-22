import matchaImage from "./matcha_latte.jpg";
import croissantImage from "./croissant.jpg";

const renderHomepage = () => {
    const container = document.getElementById("content");
    content.textContent = '';

    const header = document.createElement("h1");
    header.textContent = "Welcome to Odin's Cafe";
    container.appendChild(header);

    const description = document.createElement("p");
    const node = document.createTextNode("This is the best cafe you will ever eat at in your entire life. Don't believe us? Come try!");
    description.appendChild(node);
    container.appendChild(description);

    const header2 = document.createElement("h2");
    header2.textContent = "Our signature items:"
    const list = document.createElement("ul");
    container.appendChild(header2);
    container.appendChild(list);
    
    const signatureDrinks = ['Matcha latte', 'Coconut matcha cold foam', 'Croissant'];

    signatureDrinks.forEach((drink) => {
        const li = document.createElement("li");
        li.textContent = drink;
        list.appendChild(li);
    })

    // Image section
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('images');
    container.appendChild(imageDiv);

    const matchaImg = document.createElement("img");
    matchaImg.src = matchaImage;
    // matchaImg.style.width = "270px";
    imageDiv.appendChild(matchaImg);

    const croissantImg = document.createElement("img");
    croissantImg.src = croissantImage;
    // croissantImg.style.width = "270px";
    imageDiv.appendChild(croissantImg);
}

export { renderHomepage };


