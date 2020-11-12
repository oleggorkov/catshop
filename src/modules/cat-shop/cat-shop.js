window.addEventListener('load',function () {
    let query = document.querySelector('.cat-shop__filter-price')
    query.addEventListener("click", () => {
        const elements = document.querySelectorAll('.cat-shop__catalogue-item');
        const sorted = [...elements].sort((a, b) => {
            const priceElA = a.querySelector(".cat-shop__catalogue-item-price");
            const priceElB = b.querySelector(".cat-shop__catalogue-item-price");
            const getPrice = (el) => parseInt(el.innerHTML.replace(/ /g, ""));
            return getPrice(priceElA) - getPrice(priceElB);
        });
        const resultEl = document.querySelector(".cat-shop__sort");
        resultEl.innerHTML = null;
        sorted.forEach(el => resultEl.appendChild(el));
    });
});

window.addEventListener('load',function () {
    let query = document.querySelector('.cat-shop__filter-age')
    query.addEventListener("click", () => {
        const elements = document.querySelectorAll('.cat-shop__catalogue-item');
        const sorted = [...elements].sort((a, b) => {
            const priceElA = a.querySelector(".cat-shop__catalogue-item-age-number");
            const priceElB = b.querySelector(".cat-shop__catalogue-item-age-number");
            const getPrice = (el) => parseInt(el.innerHTML.replace(/ /g, ""));
            return getPrice(priceElA) - getPrice(priceElB);
        });
        const resultEl = document.querySelector(".cat-shop__sort");
        resultEl.innerHTML = null;
        sorted.forEach(el => resultEl.appendChild(el));
    });
});
