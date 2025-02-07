 window.addEventListener('scroll', function() {
            var topButton = document.querySelector('.top');
            
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                topButton.style.display = 'block';  
            } else {
                topButton.style.display = 'none';  
            }
        });

document.querySelector('.top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    });
