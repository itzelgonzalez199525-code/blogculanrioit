        document.addEventListener('DOMContentLoaded', function() {

            const themeToggle = document.getElementById('theme-toggle');
            const themeIcon = document.querySelector('.theme-icon');
            
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                document.body.setAttribute('data-tema', savedTheme);
                updateThemeIcon(savedTheme);
            }
            
            themeToggle.addEventListener('click', function() {
                const currentTheme = document.body.getAttribute('data-tema');
                const newTheme = currentTheme === 'oscuro' ? 'claro' : 'oscuro';
                
                document.body.setAttribute('data-tema', newTheme);
                localStorage.setItem('theme', newTheme);
                updateThemeIcon(newTheme);
            });
            
            function updateThemeIcon(theme) {
                themeIcon.textContent = theme === 'oscuro' ? '☀️' : '🌙';
            }
            
            const hamburger = document.getElementById('hamburger');
            const navMenu = document.querySelector('.nav-menu');
            
            hamburger.addEventListener('click', function() {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
            
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.addEventListener('click', function() {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
            

            document.addEventListener('click', function(event) {
                const isClickInsideNav = navMenu.contains(event.target);
                const isClickInsideHamburger = hamburger.contains(event.target);
                
                if (!isClickInsideNav && !isClickInsideHamburger && navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
            

            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            

            const newsletterForm = document.querySelector('.newsletter-form');
            if (newsletterForm) {
                newsletterForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const emailInput = this.querySelector('input[type="email"]');
                    
                    if (emailInput.value && isValidEmail(emailInput.value)) {
                      
                        alert('¡Gracias por suscribirte! Recibirás nuestras recetas mexicanas cada semana.');
                        emailInput.value = '';
                    } else {
                        alert('Por favor, introduce un email válido.');
                    }
                });
            }
            
            function isValidEmail(email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            }
        });
        