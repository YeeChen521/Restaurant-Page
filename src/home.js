function home (PRestaurant){
    
    const content = document.querySelector("#content");
    content.innerHTML = "";
    
    const h1 = document.createElement("h1");
    h1.innerHTML = "Welcome to Savory Haven";
    content.appendChild(h1);

    const img = document.createElement("img");
    img.src = PRestaurant;
    img.alt = "Pic of restaurant";
    content.appendChild(img);

    const p = document.createElement("p");
    p.innerHTML = "At Savory Haven, we serve more than just meals — we craft unforgettable dining experiences. From our carefully curated menu to the warm, inviting atmosphere, every detail is designed to delight your senses. Whether you're here for a casual lunch or a special celebration, you'll find dishes made with passion, fresh ingredients, and a touch of culinary magic."
    content.appendChild(p);
}

export {home};