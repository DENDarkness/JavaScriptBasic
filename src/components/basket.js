const basket = {
    items: [],
    wrapper: null,
    container: null,
    url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
    innit() {
        this.wrapper = document.querySelector('#wrapper');
        this.container = document.querySelector('#basket');

        this._get(this.url)
            .then(basketObject => {
                this.items = basketObject.content
            })
            .then(() => {
                this._render();
                this._hendleEvents();
            })

    },

    _get(url) {
        return fetch(url).then(d => d.json())
    },

    _hendleEvents() {
        document.querySelector('#toggle-basket').addEventListener('click', () => {
            this.wrapper.classList.toggle('hidden')
        });
        /*         this.wrapper.addEventListner('click', e => {

                }) */
    },

    _render() {
        let htmlStr = '';
        this.items.forEach((item) => {
            htmlStr += `
            <div class="drop-basket-product">
                <a href="product.html" class="drop-basket-product-link">
                    <img src="${item.productImg}"
                        alt="product" class="drop-basket-product-img">
                </a>
                <div class="drop-basket-product-info">
                    <a href="product.html" class="drop-basket-product-name">${item.productName}</a>
                    <div class="drop-basket-product-stars">
                        <i class="${item.stars > "0" ? "fas" : "far"} ${item.stars === "0.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                        <i class="${item.stars > "1" ? "fas" : "far"} ${item.stars === "1.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                        <i class="${item.stars > "2" ? "fas" : "far"} ${item.stars === "2.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                        <i class="${item.stars > "3" ? "fas" : "far"} ${item.stars === "3.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                        <i class="${item.stars > "4" ? "fas" : "far"} ${item.stars === "4.5" ? "fa-star-half-alt" : "fa-star"}"></i>
                    </div>
                    <div class="drop-basket-product-price">
                        <span class="drop-basket-product-count">${item.amount} </span> x ${item.productPrice}
                        <span class="drop-basket-product-sum"> = $${item.productPrice * item.amount}</span>
                    </div>
                </div>
                <a href="#" onclick="basket.removeItem(${item.productId})" class="drop-basket-product-close"><i class="far fa-times-circle"></i></a>
            </div>
        `;
        });
        this.container.innerHTML = htmlStr;
    }
}

basket.innit();