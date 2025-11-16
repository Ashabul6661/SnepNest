// script.js

// Tunggu hingga DOM sepenuhnya dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // Fungsi Smooth Scrolling untuk tautan navigasi
    // Asumsikan ada tautan dengan href yang dimulai dengan # (misalnya #hero, #featured-images, dll.)
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Aksi untuk tombol Call to Action (CTA)
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('Terima kasih telah tertarik! Anda akan diarahkan ke halaman pemesanan.');
        });
    }
});