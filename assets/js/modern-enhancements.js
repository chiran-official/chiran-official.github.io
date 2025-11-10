/**
 * Modern UI Enhancements for Professional Portfolio
 * Adds latest animations, smooth interactions, and performance optimizations
 */

(function() {
    'use strict';

    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        initSmoothScrolling();
        initParallaxEffects();
        initCardHoverEffects();
        initProgressiveImageLoading();
        initModernCursor();
        initAnimationOnScroll();
        initPerformanceOptimizations();
        initProfessionalTransitions();
    }

    /**
     * Enhanced smooth scrolling with easing
     */
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#' || href === '#0') return;

                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed header
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    /**
     * Parallax effects for modern feel
     */
    function initParallaxEffects() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');

        if (parallaxElements.length === 0) return;

        let ticking = false;

        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    const scrolled = window.pageYOffset;

                    parallaxElements.forEach(el => {
                        const speed = el.dataset.parallax || 0.5;
                        const yPos = -(scrolled * speed);
                        el.style.transform = `translateY(${yPos}px)`;
                    });

                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    /**
     * Modern card hover effects
     */
    function initCardHoverEffects() {
        const cards = document.querySelectorAll('.card-hover, [data-card-hover]');

        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    /**
     * Progressive image loading with blur-up effect
     */
    function initProgressiveImageLoading() {
        const images = document.querySelectorAll('img[loading="lazy"]');

        images.forEach(img => {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
                this.style.animation = 'fadeIn 0.5s ease-in';
            });
        });
    }

    /**
     * Enhanced cursor effects
     */
    function initModernCursor() {
        const cursorOne = document.querySelector('.custom_cursor_one');
        const cursorTwo = document.querySelector('.custom_cursor_two');

        if (!cursorOne || !cursorTwo) return;

        let mouseX = 0, mouseY = 0;
        let cursorOneX = 0, cursorOneY = 0;
        let cursorTwoX = 0, cursorTwoY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Smooth cursor animation
        function animateCursor() {
            // Main cursor follows with slight delay
            cursorOneX += (mouseX - cursorOneX) * 0.15;
            cursorOneY += (mouseY - cursorOneY) * 0.15;

            // Dot follows faster
            cursorTwoX += (mouseX - cursorTwoX) * 0.3;
            cursorTwoY += (mouseY - cursorTwoY) * 0.3;

            cursorOne.style.left = `${cursorOneX}px`;
            cursorOne.style.top = `${cursorOneY}px`;
            cursorTwo.style.left = `${cursorTwoX}px`;
            cursorTwo.style.top = `${cursorTwoY}px`;

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Expand cursor on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, [role="button"], .clickable');

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOne.style.width = '50px';
                cursorOne.style.height = '50px';
                cursorOne.style.borderColor = 'var(--theme-color, #667eea)';
            });

            el.addEventListener('mouseleave', () => {
                cursorOne.style.width = '32px';
                cursorOne.style.height = '32px';
                cursorOne.style.borderColor = '';
            });
        });
    }

    /**
     * Animation on scroll with Intersection Observer
     */
    function initAnimationOnScroll() {
        const animatedElements = document.querySelectorAll(
            '.scroll-reveal, [data-animate], .animate-on-scroll'
        );

        if ('IntersectionObserver' in window) {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed', 'animate-fade-in-up');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            animatedElements.forEach(el => observer.observe(el));
        } else {
            // Fallback for browsers without IntersectionObserver
            animatedElements.forEach(el => el.classList.add('revealed'));
        }
    }

    /**
     * Performance optimizations
     */
    function initPerformanceOptimizations() {
        // Debounce resize events
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                // Handle resize events here
                console.log('Window resized');
            }, 250);
        });

        // Optimize scroll events with throttling
        let scrollTimer = null;
        let lastScrollY = window.pageYOffset;

        window.addEventListener('scroll', () => {
            if (scrollTimer !== null) return;

            scrollTimer = setTimeout(() => {
                const currentScrollY = window.pageYOffset;

                // Add scroll direction class
                if (currentScrollY > lastScrollY) {
                    document.body.classList.add('scrolling-down');
                    document.body.classList.remove('scrolling-up');
                } else {
                    document.body.classList.add('scrolling-up');
                    document.body.classList.remove('scrolling-down');
                }

                lastScrollY = currentScrollY;
                scrollTimer = null;
            }, 100);
        }, { passive: true });

        // Preload critical images
        const criticalImages = document.querySelectorAll('[data-preload]');
        criticalImages.forEach(img => {
            const preloadLink = document.createElement('link');
            preloadLink.rel = 'preload';
            preloadLink.as = 'image';
            preloadLink.href = img.src || img.dataset.src;
            document.head.appendChild(preloadLink);
        });
    }

    /**
     * Professional page transitions
     */
    function initProfessionalTransitions() {
        // Fade in page on load
        document.body.classList.add('page-transition');

        // Add loading states to forms
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', function() {
                const submitBtn = this.querySelector('[type="submit"]');
                if (submitBtn) {
                    submitBtn.classList.add('loading');
                    submitBtn.disabled = true;
                }
            });
        });

        // Add ripple effect to buttons
        const buttons = document.querySelectorAll('.btn-modern, button, [role="button"]');
        buttons.forEach(button => {
            button.addEventListener('click', createRipple);
        });
    }

    /**
     * Create ripple effect on click
     */
    function createRipple(e) {
        const button = e.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple-effect');

        button.style.position = 'relative';
        button.style.overflow = 'hidden';

        const existingRipple = button.querySelector('.ripple-effect');
        if (existingRipple) {
            existingRipple.remove();
        }

        button.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    }

    /**
     * Add stagger animation to lists and grids
     */
    function initStaggerAnimations() {
        const staggerGroups = document.querySelectorAll('[data-stagger]');

        staggerGroups.forEach(group => {
            const children = group.children;
            Array.from(children).forEach((child, index) => {
                child.style.animationDelay = `${index * 0.1}s`;
                child.classList.add('animate-fade-in-up');
            });
        });
    }

    // Initialize stagger animations
    setTimeout(initStaggerAnimations, 100);

    // CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }

        @keyframes ripple-animation {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .loading {
            position: relative;
            pointer-events: none;
            opacity: 0.6;
        }

        .loading::after {
            content: '';
            position: absolute;
            width: 16px;
            height: 16px;
            top: 50%;
            left: 50%;
            margin: -8px 0 0 -8px;
            border: 2px solid #fff;
            border-radius: 50%;
            border-top-color: transparent;
            animation: spinner 0.6s linear infinite;
        }

        @keyframes spinner {
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    // Log initialization
    console.log('✨ Modern UI enhancements loaded successfully');
})();
