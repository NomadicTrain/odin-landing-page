document.querySelectorAll('nav a').forEach(link => {
    link.onclick = function(e) {
        e.preventDefault();
        document.getElementById('lightbox').style.display = 'block';
        document.getElementById('lightbox-image').src = this.getAttribute('data-image');
    }
});

document.querySelector('.close').onclick = function() {
    document.getElementById('lightbox').style.display = 'none';
}