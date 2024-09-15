const loadHTML = (url, selector) => {
  fetch(url)
    .then(response => response.text())
    .then(html => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.innerHTML = html;
        });
    });
}

loadHTML(url='header.html', selector='.header');
loadHTML(url='banner.html', selector='.banner');
loadHTML(url='hero.html', selector='.hero');
loadHTML(url='sounds.html', selector='.sounds');
loadHTML(url='connected-experience.html', selector='.connectedExperience');
loadHTML(url='gear.html', selector='.gear');
loadHTML(url='technology.html', selector='.technology');
loadHTML(url='cards.html', selector='.cards');
loadHTML(url='hero-footer.html', selector='.hero-footer');
loadHTML(url='footer.html', selector='.footer');