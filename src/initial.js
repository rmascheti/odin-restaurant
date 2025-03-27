import pizzaImage from './AIPizzeria2.jpeg';
function renderInitial(){

    document.body.innerHTML = `<header>
        <h1>Napoli Pizzeria</h1>
        <div class="navbuttons">
            <nav><button>Home</button></nav>
            <nav><button>Menu</button></nav>
            <nav><button>About</button></nav>
        </div>
    </header>
    <div id="content">
        <div class="left">
            <h2 id="slogan">The Best Pizza in Town</h2>
            <p id="catchphrase">Serving the most delicious, freshest, tastiest, traditional Italian pizza since 1914</p>
            <div class="order">
                <button type="button">Order Now</button>
                <p>or come and meet us!</p>
            </div>
        </div>
        <div class="right"></div>
    </div>`
    const image = document.createElement('img');
    image.src = pizzaImage;
    document.querySelector('.right').appendChild(image);
}

export default renderInitial;