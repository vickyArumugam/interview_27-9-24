document.addEventListener("DOMContentLoaded", function() {
    const text = "आपकी सुविधा, हमारी प्राथमिकता|";
    const animatedText = document.querySelector('.main-content h1');
    let index = 0;
    let isDeleting = false;

    function animate() {
        const currentText = text.substring(0, index);
        const parts = currentText.split(',');
        
        if (parts.length > 1) {
            animatedText.innerHTML = `<span class="orange-text">${parts[0]},</span><span class="white-text">${parts[1]}</span>`;
        } else {
            animatedText.innerHTML = `<span class="orange-text">${currentText}</span>`;
        }

        if (!isDeleting && index < text.length) {
            index++;
            setTimeout(animate, 100);
        } else if (isDeleting && index > 0) {
            index--;
            setTimeout(animate, 50);
        } else {
            isDeleting = !isDeleting;
            setTimeout(animate, isDeleting ? 1000 : 500);
        }
    }

    animate();
});

