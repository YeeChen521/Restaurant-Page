function menu (){
    const content = document.querySelector("#content");
    const h1 = document.createElement("h1");
    h1.innerHTML = "Our Signature Dishes";
    content.appendChild(h1);

    const p = document.createElement("p");
    p.innerHTML = "At Savory Haven, we pride ourselves on a diverse menu that blends tradition with creativity. Whether you're craving comfort food or gourmet cuisine, there's something here to satisfy every palate.";
    content.appendChild(p);

    const h3 = document.createElement("h3");
    h3.innerHTML =  "Menu Sections : ";
    content.appendChild(h3);

    const menuList = document.createElement("ul");
    let menuCategory = ["Starters", "Mains", "Desserts" , "Drinks"];
    let starters = ["Garlic Herb Bread","Creamy Mushroom Soup", "Thai Spiced Chicken Skewers"];
    let mains = ["Grilled Salmon with Lemon Butter Sauce","Slow-Cooked Lamb Shank","Spaghetti Aglio e Olio (Vegetarian"];
    let desserts = ["Classic Crème Brûlée","Chocolate Lava Cake","Fresh Mango Sticky Rice"];
    let drinks = ["Signature Iced Latte","Sparkling Elderflower Tonic","House-Made Lemon Tea"];
    const menuItems = [starters, mains, desserts, drinks];
    for (let i = 0 ; i < 4 ; i++){
        const category = document.createElement("li");
        category.textContent = menuCategory[i];

        const dishes = document.createElement("ul");
        for (let j = 0; j < menuItems.length -1 ; j ++){
            const dish = document.createElement("li");
            dish.textContent = menuItems[i][j];
            dishes.appendChild(dish);
        }
        category.appendChild(dishes);
        menuList.appendChild(category);
    };
    content.appendChild(menuList);

}

export {menu};