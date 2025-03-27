import pizzaImage from './AIPizzeria2.jpeg';
   
   function renderMenu(){
   
   document.getElementById('content').innerHTML = 
   `<div class="left menu">
        <div class="menu-item">
            <div class="ingredients">
                <h2>Margherita</h2>
                <p>Tomato, mozzarella, basil</p>
            </div>
            <div class="price">
                <p>$11</p>
            </div>
        </div>

        <div class="menu-item">
            <div class="ingredients">
                <h2>Mozarella</h2>
                <p>Cheese and tomato</p>
            </div>
            <div class="price">
                <p>$10</p>
            </div>
        </div>
        <div class="menu-item">
            <div class="ingredients">
                <h2>Pepperoni</h2>
                <p>Cheese, pepperoni and tomato</p>
            </div>
            <div class="price">
                <p>$12</p>
            </div>
        </div>
        <div class="menu-item">
            <div class="ingredients">
                <h2>Napoletana</h2>
                <p>Cheese, garlic, basil and tomato</p>
            </div>
            <div class="price">
                <p>$10</p>
            </div>
        </div>
    </div>
        <div class="right"></div>`;
        const image = document.createElement('img');
        image.src = pizzaImage;
        document.querySelector('.right').appendChild(image);
    };

    export default renderMenu;