
let clicked = false;

    $('#img').on('click', function() {
        if (!clicked) {
            $('#img').attr('src', './website fotolar/aalogogif.gif');
            clicked = true;
            
            setTimeout(() => {
                $('#img').attr('src', './website fotolar/justlogo.png');
                clicked = false;
            }, 1000); 
        }
    });


let navbarTexts = $('.navbar-text');
    navbarTexts.on('click', function() {
        navbarTexts.removeClass('active'); 
        $(this).addClass('active'); 
    });

    //js starts

    document.addEventListener('DOMContentLoaded', () => {
        const burger = document.querySelector('#burger');
        const navbarInner = document.querySelector('#navbar-inner');
        const imgg = document.querySelector('#img');
    
        function updateNavbar() {
            if (window.innerWidth <= 830) {
                burger.style.display = 'block';
    
                // Check if navbar should be visible or not
                if (navbarInner.classList.contains('compress')) {
                    navbarInner.style.display = 'flex';
                } else {
                    navbarInner.style.display = 'none';
                }
    
                // Ensure burger menu click is properly handled
                setupBurgerMenu();
            } else {
                burger.style.display = 'none';
                navbarInner.classList.remove('compress');
                navbarInner.style.display = 'flex'; // Restore the default display
                resetNavbarStyles();
            }
        }
    
        function setupBurgerMenu() {
            burger.removeEventListener('click', toggleNavbar);
            burger.addEventListener('click', toggleNavbar);
        }
    
        function toggleNavbar() {
            if (navbarInner.classList.contains('compress')) {
                navbarInner.classList.remove('compress');
                navbarInner.style.display = 'none';
                burger.classList.remove('position');
                imgg.classList.remove('position');
    
                burger.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                `;
            } else {
                navbarInner.classList.add('compress');
                navbarInner.style.display = 'flex';
                burger.classList.add('position');
                imgg.classList.add('position');
    
                burger.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                `;
            }
        }
    
        function resetNavbarStyles() {
            navbarInner.style.position = 'relative';
            navbarInner.style.top = 'auto';
            navbarInner.style.left = 'auto';
            navbarInner.style.transform = 'none';
            burger.classList.remove('position');
            imgg.classList.remove('position');
        }
    
        // Initial check
        updateNavbar();
    
        // Update on resize
        window.addEventListener('resize', updateNavbar);
    });
    
    
    //js ends