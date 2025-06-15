import "./styles.css";
import PRestaurant from "./png/download.jpeg";
import {home} from "./home.js";
import {menu} from "./menu.js";
import {about} from "./about.js";
function clearContent(){
    const div = document.querySelector("#content");
    div.innerHTML="";
}

document.addEventListener("DOMContentLoaded",() => {
    const nav = document.querySelector("nav");
    let arr = ["Home", "Menu", "About"];
    let id = ["homebtn","menubtn","aboutbtn"];
    for (let i = 0 ; i < 3 ; i++){
        const btn = document.createElement("button");
        btn.textContent = arr[i];
        btn.id = id[i];
        nav.appendChild(btn);
    }

    setTimeout(() => {
        document.querySelector("#homebtn").addEventListener("click", () => {
            clearContent();
            home(PRestaurant);
        });

        document.querySelector("#menubtn").addEventListener("click", () => {
            clearContent();
            menu();
        });

        document.querySelector("#aboutbtn").addEventListener("click", () => {
            clearContent();
            about();
        });
        home(PRestaurant);
    })
});
