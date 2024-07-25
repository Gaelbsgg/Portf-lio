const autoButtons = document.querySelectorAll('.auto-btn');
let counter = 1;

const slideShow = () => {
    setInterval(() => {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 4) {
            counter = 1;
        }
    }, 3000); // Alterne as imagens a cada 3 segundos
};

slideShow();

// Exibir o botão quando a página for rolada para baixo
window.onscroll = function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Função para rolar a página de volta ao topo
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}