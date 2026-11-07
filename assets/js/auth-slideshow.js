// Slideshow gambar di halaman login & register
document.addEventListener('DOMContentLoaded', () => {
    const slideshow = document.querySelector('.info-slideshow');
    if (!slideshow) return;

    const slides = Array.from(slideshow.querySelectorAll('.slide'));
    const dots = Array.from(slideshow.querySelectorAll('.dot'));
    if (slides.length < 2) return;

    const INTERVAL = 4000; // 4 detik per slide
    let index = 0;
    let timer = null;

    function show(next) {
        index = (next + slides.length) % slides.length;
        slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
        dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    }

    function stop() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }

    function start() {
        stop();
        timer = setInterval(() => show(index + 1), INTERVAL);
    }

    // Klik titik untuk pindah slide
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            show(i);
            start();
        });
    });

    // Pause saat kursor di atas gambar
    slideshow.addEventListener('mouseenter', stop);
    slideshow.addEventListener('mouseleave', start);

    // Pause saat tab tidak aktif (hemat resource)
    document.addEventListener('visibilitychange', () => {
        document.hidden ? stop() : start();
    });

    start();
});
