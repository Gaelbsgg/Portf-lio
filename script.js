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