
document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.card.product');
    
    products.forEach((product, index) => {
       
        const heartBtn = document.createElement('button');
        heartBtn.className = 'heart-btn';
        heartBtn.innerHTML = '♥';
        heartBtn.setAttribute('aria-label', 'Like product');
        
        product.style.position = 'relative';
        product.appendChild(heartBtn);
        
        heartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('liked');
        });
    });
});


const style = document.createElement('style');
style.textContent = `
    .heart-btn {
        position: absolute;
        top: 15px;
        right: 15px;
        background: transparent;
        border: none;
        font-size: 32px;
        color: rgba(255, 255, 255, 0.8);
        cursor: pointer;
        transition: all 0.3s ease;
        text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        z-index: 10;
        padding: 0;
        line-height: 1;
    }
    
    .heart-btn:hover {
        transform: scale(1.15);
        color: rgba(255, 255, 255, 1);
    }
    
    .heart-btn.liked {
        color: #ff0000;
        text-shadow: 0 2px 8px rgba(255,0,0,0.4);
        animation: heartPulse 0.3s ease;
    }
    
    @keyframes heartPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.3); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);
