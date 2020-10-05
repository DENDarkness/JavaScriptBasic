const MENU = ["HOME", "MAN", "WOMEN", "KIDS", "ACCESSORIES", "FEATURED", "HOT DEALS"];
const LINK = ["index.html", "product.html", "product.html", "product.html", "product.html", "product.html", "product.html"];
const COMPANY = ["Home", "Shop", "About", "How It Works", "Contact"];
const INFO = ["Terms and Conditions", "Privacy Polocy", "How to Buy", "How to Sell", "Promotion"];
const CAT = ["Men", "Women", "Child", "Apparel", "Browse All"];
const ZERO = ["#", "#", "#", "#", "#", "#", "#"];

const nav = {
    itemsTopNav: [],
    itemsNavCompany: [],
    itemsNavInfo: [],
    itemsNavCat: [],
    conteinerTopNav: null,
    containerNavCompany: null,
    containerNavInfo: null,
    containerNavCat: null,
    init() {
        this.conteinerTopNav = document.querySelector('#nav');
        this.containerNavCompany = document.querySelector('#nav-company');
        this.containerNavInfo = document.querySelector('#nav-information');
        this.containerNavCat = document.querySelector('#nav-shop_category');
        this.itemsTopNav = getItems(MENU, LINK);
        this.itemsNavCompany = getItems(COMPANY, ZERO);
        this.itemsNavInfo = getItems(INFO, ZERO);
        this.itemsNavCat = getItems(CAT, ZERO);
        this._renderTopNav();
        this._renderNavCompany();
        this._renderNavInfo();
        this._renderNavCat();
    },
    _renderTopNav() {
        let htmlStr = '';
        this.itemsTopNav.forEach((item, index) => {
            htmlStr += `<a href="${item.navLink}">${item.navName}</a>`;
        });
        this.conteinerTopNav.innerHTML = htmlStr;
    },
    _renderNavCompany() {
        let htmlStr = '<h3>company</h3>';
        this.itemsNavCompany.forEach((item, index) => {
            htmlStr += `<a href="${item.navLink}">${item.navName}</a>`
        });
        this.containerNavCompany.innerHTML = htmlStr;
    },
    _renderNavInfo() {
        let htmlStr = `<h3>information</h3>`;
        this.itemsNavInfo.forEach((item, index) => {
            htmlStr += `<a href="${item.navLink}">${item.navName}</a>`
        });
        this.containerNavInfo.innerHTML = htmlStr;
    },
    _renderNavCat() {
        let htmlStr = `<h3>shop category</h3>`;
        this.itemsNavCat.forEach((item, index) => {
            htmlStr += `<a href="${item.navLink}">${item.navName}</a>`
        });
        this.containerNavCat.innerHTML = htmlStr;
    }
}



function createNewItem(name, link) {
    return {
        navName: name,
        navLink: link
    }
}

function getItems(menu, link) {
    return menu.map((name, index) => createNewItem(menu[index], link[index]));
}

nav.init();