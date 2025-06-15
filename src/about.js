function about(){
    const content = document.querySelector("#content");
    const h1 = document.createElement("h1");
    h1.innerHTML = "About Savory Haven";
    content.appendChild(h1);

    const p1 = document.createElement("p");
    p1.textContent = "Savory Haven began as a small family kitchen with a big dream: to bring warmth and joy to the dining table through food made from the heart.";
    content.appendChild(p1);

    const p2 = document.createElement("p");
    p2.textContent = "Over the years, we've grown into a cozy spot where locals and travelers alike gather to enjoy hearty meals, meaningful conversations, and a welcoming atmosphere. Our chefs blend global flavors with local ingredients, crafting dishes that are as memorable as the moments they accompany.";
    content.appendChild(p2);

    const p3 = document.createElement("p");
    p3.textContent = "We believe food is more than nourishment — it’s a shared experience, a story, and a celebration.";
    content.appendChild(p3);

    const p4 = document.createElement("p");
    p4.innerHTML = "<strong>Come join us. Let's make every bite count.</strong>";
    content.appendChild(p4);
    
}

export {about};