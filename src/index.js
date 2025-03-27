import "./styles.css";
import renderInitial from "./initial";
import renderHome from "./home";
import renderMenu from "./menu";
import renderAbout from "./about";

renderInitial();

addEventListener("click", (e) =>{
    if(e.target.textContent === "Home"){
        renderHome();
    }
    if(e.target.textContent === "Menu"){
        renderMenu();
    }
    if(e.target.textContent === "About"){
        renderAbout();
    }
})