import pizzaImage from './AIPizzeria2.jpeg';
   
   function renderAbout(){
   
   document.getElementById('content').innerHTML = `<div class="left">
            <h2 id="slogan">Our History</h2>
            <p id="catchphrase">Founded in 1914 by Giuseppe Gandolfini, coming from Naples, Italy. He had nothing but a dream to touch people by his marvelous pizzas.
        <br/>
        <br/>
        His family continued the tradition to make the pizzas the way he used to made since the day the restaurant was open.</p>
        </div>
        <div class="right"></div>`;
        const image = document.createElement('img');
        image.src = pizzaImage;
        document.querySelector('.right').appendChild(image);
    };

    export default renderAbout;