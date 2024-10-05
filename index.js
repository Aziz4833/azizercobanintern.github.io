


    
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
    
    
  
    
    
    
    
    

    











    
    
    const texts = {
        english: {
            apps: "Apps",
            whatDoWeDo: "What do we do?",
            description: `In today's dynamic world, gaming is not just entertainment; it's an art form and a platform for innovation. Our goal is to create games that captivate and provide an emotional experience. With our creativity and innovative perspective, we aim to offer unforgettable moments. Join us on this journey as we shape the future of gaming together.`,
            communityUpdates: "Community Updates",
            dateInfo: "MMMM DD --------------------------------",
            communityInfo: "Infooooooooooooooooooooooo ...",
            footerQuote: "\"Making Games is an Art\"",
            followUs: "Follow Us",
            rightsReserved: "All Rights Reserved 2024 Niyel<br>Technologies Ltd."
        },
        turkish: {
            apps: "Uygulamalar",
            whatDoWeDo: "Ne yapıyoruz?",
            description: `Günümüzün dinamik dünyasında oyunlar sadece bir eğlence aracı değil; aynı zamanda bir sanat formu ve inovasyon platformudur. Amacımız, duygusal bir deneyim sağlayan ve insanları etkileyen oyunlar yaratmaktır. Yaratıcılığımız ve yenilikçi bakış açımızla, unutulmaz anlar sunmayı hedefliyoruz. Geleceğin oyun dünyasını şekillendirirken bize katılın.`,
            communityUpdates: "Topluluk Güncellemeleri",
            dateInfo: "MMMM DD --------------------------------",
            communityInfo: "Bilgiiiiiiiiiiiiiiiiiiiiiiii ...",
            footerQuote: "\"Oyun Yapmak Bir Sanattır\"",
            followUs: "Bizi Takip Edin",
            rightsReserved: "Tüm Hakları Saklıdır 2024 Niyel<br>Teknolojileri Ltd."
        }
    };
    
    let currentLang = 'english';
    
    function toggleLanguage() {
        const lang = currentLang === 'english' ? 'turkish' : 'english';
        currentLang = lang;
        document.getElementById('toggle-lang').innerText = lang === 'english' ? 'Switch to Turkish' : 'Switch to English';
        document.querySelector('.middle h2').innerText = texts[lang].apps;
        document.querySelector('.what-section .right h3').innerText = texts[lang].whatDoWeDo;
        document.querySelector('.what-section .right p').innerText = texts[lang].description;
        document.querySelector('.community .upper h2').innerText = texts[lang].communityUpdates;
        document.querySelector('.community .lower p:nth-child(1)').innerText = texts[lang].dateInfo;
        document.querySelector('.community .lower p:nth-child(2)').innerText = texts[lang].communityInfo;
        document.querySelector('.footer h2').innerText = texts[lang].footerQuote;
        document.querySelector('.right-footer h3').innerText = texts[lang].followUs;
        document.querySelector('.bottom-footer p').innerHTML = texts[lang].rightsReserved;
    }
    
    document.getElementById('toggle-lang').addEventListener('click', toggleLanguage);
    
    
    






    const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);



document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type   : 'loop',
        drag   : 'free',
        focus  : 'center',
        perPage: 3,
        autoScroll: {
            speed: 1,
        },
        extensions: [window.Splide.extensions.AutoScroll], // Using AutoScroll extension
    }).mount();
});



