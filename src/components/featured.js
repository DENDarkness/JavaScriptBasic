const NAMES = ['Mango People T-Shirt', 'Banana People T-Shirt', 'Strawberry People T-Shirt', 'Orange People T-Shirt', 'Pumpkin People T-Shirt', 'Pineapple People T-Shirt', 'Cucumber People T-Shirt', 'Tomato People T-Shirt'];
const PRICES = [52, 53, 55, 67, 69, 94, 23, 45];

const index = {
    items: [],
    contFeatured: null,
    imgFTPurl: 'https://raw.githubusercontent.com/DENDarkness/static/master',
    titleFeatured: `<div class="featured-items__title">
                        <h2>Featured Items</h2>
                        <h4>Shop for items based on what we featured in this week</h4>
                    </div>`,
    buttonFeatured: `<div class="featured-items__undertitle">
                        <a href="#">Browse All Product <i class="fas fa-long-arrow-alt-right"></i></a>
                    </div>`,
    init() {
        this.contFeatured = document.querySelector('#featured');
        this.items = getItems();
        this.renderFeatured();
    },
    renderFeatured() {
        let htmlStr = this.titleFeatured;
        this.items.forEach((item, index) => {
            let imgURL = `${this.imgFTPurl}/featuredItem${index + 1}.jpg`;
            htmlStr += `
            <div class="hot-offer">
                <div class="hot-offer__shadow">
                    <img src="${imgURL}" alt="t-shirt">
                    <div class="hot-offer__hover">
                        <div class="hot-offer__square">
                            <button><img src="../src/assets/img/kart_white.png" alt="order">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <a href="single.html">${item.productName}</a>
                <h3>
                    $${item.productPrice}.00
                    <div class="hot-offer__stars">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </h3>
            </div>
            `;
        });
        htmlStr += this.buttonFeatured;
        this.contFeatured.innerHTML = htmlStr;
    }
}

function createNewItem(name, price) {
    return {
        productName: name,
        productPrice: price
    }
}

function getItems() {
    return NAMES.map((name, index) => createNewItem(NAMES[index], PRICES[index]));
}


index.init();