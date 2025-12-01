// تصفية الاقتباسات
function filterQuotes(category) {
    const quoteCards = document.querySelectorAll('.quote-card');
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
    
    quoteCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 10);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// إضافة أحداث لأزرار التصفية
document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterQuotes(btn.dataset.category);
        });
    });
    
    // تأثيرات التمرير
    const fadeElements = document.querySelectorAll('.book-card, .quote-card');
    
    const fadeInOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInOnScroll.observe(el);
    });
});