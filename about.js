
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

   


// Function to change text content based on the selected language
function updateLanguage(language) {
    // Define translations
    const translations = {
        en: {
            home: "Home",
            apps: "Apps",
            about: "About",
            switchToTurkish: "Switch to Turkish",
            whatDoWeDo: "What do we do?",
            whatDoWeDoContent: "In today's dynamic world, gaming is not just entertainment; it's an art form and a platform for innovation. Our goal is to create games that captivate and provide an emotional experience. With our creativity and innovative perspective, we aim to offer unforgettable moments. Join us on this journey as we shape the future of gaming together.",
            whoAreWe: "Who are we?",
            atik: "Atik Kerim Altin",
            ahmet: "Ahmet Kömürcüler",
            batuhan: "Batuhan Bulancak",
            whereAreWe: "Where are we?",
            makingGamesIsAnArt: "\"Making Games is an Art\"",
            followUs: 'Follow Us'
            
        },
        tr: {
            home: "Home",
            apps: "Apps",
            about: "About",
            switchToTurkish: "İngilizceye çevir",
            whatDoWeDo: "Ne yapıyoruz?",
            whatDoWeDoContent: "Günün dinamik dünyasında, oyun sadece eğlence değil; aynı zamanda bir sanat formu ve yenilik için bir platformdur. Amacımız, büyüleyici ve duygusal bir deneyim sunan oyunlar yaratmaktır. Yaratıcılığımız ve yenilikçi bakış açımızla, unutulmaz anlar sunmayı hedefliyoruz. Gelin, oyun dünyasının geleceğini birlikte şekillendirelim.",
            whoAreWe: "Kimleriz?",
            atik: "Atik Kerim Altın",
            ahmet: "Ahmet Kömürcüler",
            batuhan: "Batuhan Bulancak",
            whereAreWe: "Neredeyiz?",
            makingGamesIsAnArt: "\"Oyun Yapmak Bir Sanattır\"",
            followUs: 'Bizi takip et'
            
        }
    };

    // Get the current translation based on the language selected
    const text = translations[language];

    // Update text content
    document.querySelector('.navbar-text[href="./index.html"]').textContent = text.home;
    document.querySelector('.navbar-text[href="./Apps.html"]').textContent = text.apps;
    document.querySelector('.navbar-text[href="./about.html"]').textContent = text.about;
    document.getElementById('toggle-lang').textContent = text.switchToTurkish;
    document.querySelector('.box1 h2').textContent = text.whatDoWeDo;
    document.querySelector('.box1 .inner-box p').textContent = text.whatDoWeDoContent;
    document.querySelector('.box2 h2').textContent = text.whoAreWe;
    document.querySelector('.atik p').textContent = text.atik;
    document.querySelector('.ahmet p').textContent = text.ahmet;
    document.querySelector('.batuhan p').textContent = text.batuhan;
    document.querySelector('.box3 h2').textContent = text.whereAreWe;
    document.querySelector('.footer h2').textContent = text.makingGamesIsAnArt;
    document.querySelector('.right-footer h3').textContent = text.followUs;

    // Update app names in the footer
    const appNames = text.appNames;
    const appElements = document.querySelectorAll('.footer .appNames p');
    appElements.forEach((element, index) => {
        if (appNames[index]) {
            element.textContent = appNames[index];
        }
    });
}

// Initialize language to English by default
let currentLanguage = 'en';

// Set event listener for language toggle button
document.getElementById('toggle-lang').addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'tr' : 'en';
    updateLanguage(currentLanguage);
});

// Initial page load setup
updateLanguage(currentLanguage);










    




