document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if(window.innerWidth <= 768) {
                    navMenu.style.display = 'none';
                }
            }
        });
    });
    
    // Portfolio filtering
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                if(filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Blog dashboard functionality
    const newPostBtn = document.getElementById('new-post-btn');
    const postForm = document.querySelector('.post-form');
    
    newPostBtn.addEventListener('click', function() {
        postForm.style.display = postForm.style.display === 'block' ? 'none' : 'block';
    });
    
    // Form submission for blog posts
    const blogForm = document.getElementById('blog-form');
    if(blogForm) {
        blogForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would send this data to a server
            alert('Blog post submitted successfully!');
            this.reset();
            postForm.style.display = 'none';
            
            // Here you would typically refresh the blog post list
        });
    }
    
    // Sample blog posts data (in a real app, this would come from an API)
    const samplePosts = [
        {
            title: "Optimizing Snapgram Performance",
            excerpt: "Learn how we improved Snapgram's loading times by 40%",
            date: "June 15, 2025",
            category: "Snapgram"
        },
        {
            title: "CSS Grid for Responsive Layouts",
            excerpt: "A deep dive into creating flexible layouts with CSS Grid",
            date: "May 28, 2025",
            category: "Development"
        },
        {
            title: "User Engagement Strategies",
            excerpt: "Proven techniques to increase user engagement on social platforms",
            date: "April 10, 2025",
            category: "Snapgram"
        }
    ];
    
    // Render sample blog posts
    const postList = document.querySelector('.post-list');
    
    if(postList) {
        samplePosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post-item';
            postElement.innerHTML = `
                <h4>${post.title}</h4>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-meta">
                    <span class="post-date">${post.date}</span>
                    <span class="post-category ${post.category.toLowerCase()}">${post.category}</span>
                </div>
            `;
            postList.appendChild(postElement);
        });
    }
    
    // Sticky header on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if(window.scrollY > 100) {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.about-stats .stat-item, .skill-category, .portfolio-item, .blog-container > div');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if(elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.about-stats .stat-item, .skill-category, .portfolio-item, .blog-container > div').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});

