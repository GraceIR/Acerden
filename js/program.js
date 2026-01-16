// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Get all elements
    const programCards = document.querySelectorAll('.program-card');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const viewDetailsButtons = document.querySelectorAll('.view-details-btn');
    const totalProgramsElement = document.getElementById('total-programs');
    const filteredProgramsElement = document.getElementById('filtered-programs');
    const activeCategoryElement = document.getElementById('active-category');
    
    // Set total programs count
    totalProgramsElement.textContent = programCards.length;
    
    // Function to filter programs
    function filterPrograms(category) {
        let visibleCount = 0;
        
        programCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (category === 'all' || cardCategory === category) {
                card.classList.remove('hidden');
                visibleCount++;
                
                // Add animation for appearing
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
            } else {
                card.classList.add('hidden');
            }
        });
        
        // Update filtered programs count
        filteredProgramsElement.textContent = visibleCount;
        
        // Update active category display
        const activeButton = document.querySelector('.filter-btn.active');
        activeCategoryElement.textContent = activeButton.textContent;
    }
    
    // Add click event to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter category
            const filterCategory = this.getAttribute('data-filter');
            
            // Filter programs
            filterPrograms(filterCategory);
            
            // Close any expanded program cards when filtering
            programCards.forEach(card => {
                if (card.classList.contains('expanded')) {
                    card.classList.remove('expanded');
                    const btn = card.querySelector('.view-details-btn');
                    btn.innerHTML = 'View Program Details <i class="fas fa-chevron-down"></i>';
                }
            });
        });
    });
    
    // Function to close all expanded programs except the one that was clicked
    function closeOtherPrograms(currentProgram) {
        programCards.forEach(card => {
            if (card !== currentProgram && card.classList.contains('expanded')) {
                card.classList.remove('expanded');
                const btn = card.querySelector('.view-details-btn');
                btn.innerHTML = 'View Program Details <i class="fas fa-chevron-down"></i>';
            }
        });
    }
    
    // Add click event to view details buttons
    viewDetailsButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const programCard = this.closest('.program-card');
            const isExpanded = programCard.classList.contains('expanded');
            
            // Close all other programs
            closeOtherPrograms(programCard);
            
            // Toggle current program
            if (isExpanded) {
                programCard.classList.remove('expanded');
                this.innerHTML = 'View Program Details <i class="fas fa-chevron-down"></i>';
            } else {
                programCard.classList.add('expanded');
                this.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
                
                // Scroll the program into view if it's not fully visible
                programCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });
    
    // Add click event to the entire program header for easier access
    programCards.forEach(card => {
        const programHeader = card.querySelector('.program-header');
        const programPreview = card.querySelector('.program-preview');
        
        programHeader.addEventListener('click', function(e) {
            // Don't trigger if clicking on meta info
            if (!e.target.classList.contains('program-date') && 
                !e.target.classList.contains('program-location') &&
                !e.target.closest('.program-meta')) {
                const btn = card.querySelector('.view-details-btn');
                btn.click();
            }
        });
        
        programPreview.addEventListener('click', function() {
            const btn = card.closest('.program-card').querySelector('.view-details-btn');
            btn.click();
        });
    });
    
    // Add keyboard support for accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close all expanded programs when Escape key is pressed
            programCards.forEach(card => {
                if (card.classList.contains('expanded')) {
                    card.classList.remove('expanded');
                    const btn = card.querySelector('.view-details-btn');
                    btn.innerHTML = 'View Program Details <i class="fas fa-chevron-down"></i>';
                }
            });
        }
    });
    
    // Initialize with first program expanded for demo purposes
    if (programCards.length > 0) {
        programCards[0].classList.add('expanded');
        const firstBtn = programCards[0].querySelector('.view-details-btn');
        firstBtn.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
    }
});