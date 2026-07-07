(function () {
    'use strict';

    var nav = document.getElementById('nav');
    var navToggle = document.getElementById('nav-toggle');
    var navLinks = document.getElementById('nav-links');

    // Sticky nav background on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 40) {
            nav.classList.add('nav--scrolled');
        } else {
            nav.classList.remove('nav--scrolled');
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', function () {
        var isOpen = navLinks.classList.toggle('open');
        navToggle.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('open');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Scroll reveal for sections
    var revealElements = document.querySelectorAll(
        '.section__header, .timeline__item, .skills__group, .project-card, .award-card, .education-card, .about__text, .contact__grid > *'
    );

    revealElements.forEach(function (el) {
        el.classList.add('reveal');
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(function (el) {
        observer.observe(el);
    });

    // Active nav link highlighting
    var sections = document.querySelectorAll('section[id]');
    var navAnchors = navLinks.querySelectorAll('a[href^="#"]');

    window.addEventListener('scroll', function () {
        var scrollPos = window.scrollY + 120;

        sections.forEach(function (section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navAnchors.forEach(function (a) {
                    a.style.color = '';
                    if (a.getAttribute('href') === '#' + id) {
                        a.style.color = '#14b8a6';
                    }
                });
            }
        });
    });
})();
