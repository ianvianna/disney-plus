export default class HideMenu {
    constructor(container, item, limit) {
        this.container = document.querySelector(container);
        this.item = document.querySelectorAll(item);
        this.limit = document.querySelector(limit);
    }
    removeClass(className) {
        this.container.classList.remove(className);
        this.item.forEach((item) => {
            item.classList.remove(className);
        });
    }
    addClass(className) {
        this.container.classList.add(className);
        this.item.forEach((item) => {
            item.classList.add(className);
        });
    }
    checkLimit() {
        if (this.limit.getBoundingClientRect().y <= 0) {
            this.addClass("active");
        } else {
            this.removeClass("active");
        }
    }
    addEvents() {
        window.addEventListener("scroll", this.checkLimit);
    }
    bindEvents() {
        this.checkLimit = this.checkLimit.bind(this);
    }
    init() {
        this.bindEvents();
        this.addEvents();
        this.checkLimit();
        return this;
    }
}
