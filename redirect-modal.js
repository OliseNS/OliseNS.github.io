// Redirect Banner Functionality
(function() {
    // Configuration
    const REDIRECT_URL = 'https://olisemeka.dev/';
    
    // Create banner HTML
    function createBanner() {
        const bannerHTML = `
            <div id="redirectBanner" class="redirect-banner">
                <div class="redirect-banner-content">
                    <div class="redirect-banner-left">
                        <i class="fas fa-external-link-alt redirect-banner-icon"></i>
                        <span class="redirect-banner-text">
                            Site moved to <strong class="redirect-banner-highlight">olisemeka.dev</strong>
                        </span>
                    </div>
                    <div class="redirect-banner-right">
                        <button type="button" class="redirect-banner-btn" id="redirectButton">
                            Visit New Site
                        </button>
                        <button type="button" class="redirect-banner-close" id="closeBanner" aria-label="Close">
                            ×
                        </button>
                    </div>
                </div>
            </div>
            
            <style>
                .redirect-banner {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    background: linear-gradient(135deg, #1a170f 0%, #2d2820 100%);
                    border-bottom: 2px solid #eec35e;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
                    z-index: 9999;
                    font-family: inherit;
                    animation: slideDown 0.4s ease-out;
                }
                
                .redirect-banner-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0.75rem 1rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                .redirect-banner-left {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    flex: 1;
                    min-width: 0;
                }
                
                .redirect-banner-icon {
                    color: #eec35e;
                    font-size: 0.9rem;
                    flex-shrink: 0;
                }
                
                .redirect-banner-text {
                    color: #eceae5;
                    font-size: 0.85rem;
                    line-height: 1.3;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                
                .redirect-banner-highlight {
                    color: #eec35e;
                    font-weight: 600;
                }
                
                .redirect-banner-right {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    flex-shrink: 0;
                }
                
                .redirect-banner-btn {
                    background: #eec35e;
                    border: none;
                    color: #1a170f;
                    padding: 0.4rem 0.8rem;
                    font-size: 0.8rem;
                    font-weight: 600;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    white-space: nowrap;
                }
                
                .redirect-banner-btn:hover {
                    background: #d4b552;
                    transform: translateY(-1px);
                }
                
                .redirect-banner-close {
                    background: transparent;
                    border: 1px solid rgba(236, 234, 229, 0.3);
                    color: #eceae5;
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 3px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    font-size: 16px;
                    line-height: 1;
                    font-weight: normal;
                }
                
                .redirect-banner-close:hover {
                    background: rgba(236, 234, 229, 0.1);
                    border-color: rgba(236, 234, 229, 0.5);
                }
                
                body {
                    padding-top: 48px !important;
                }
                
                @keyframes slideDown {
                    from {
                        transform: translateY(-100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                
                @keyframes slideUp {
                    from {
                        transform: translateY(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateY(-100%);
                        opacity: 0;
                    }
                }
                
                /* Tablet responsive */
                @media (max-width: 768px) {
                    .redirect-banner-content {
                        padding: 0.6rem 0.8rem;
                    }
                    
                    .redirect-banner-text {
                        font-size: 0.8rem;
                    }
                    
                    .redirect-banner-btn {
                        padding: 0.35rem 0.6rem;
                        font-size: 0.75rem;
                    }
                    
                    body {
                        padding-top: 44px !important;
                    }
                }
                
                /* Mobile responsive */
                @media (max-width: 480px) {
                    .redirect-banner-content {
                        padding: 0.5rem;
                        gap: 0.5rem;
                    }
                    
                    .redirect-banner-left {
                        gap: 0.4rem;
                    }
                    
                    .redirect-banner-text {
                        font-size: 0.75rem;
                        white-space: normal;
                        line-height: 1.2;
                    }
                    
                    .redirect-banner-btn {
                        padding: 0.3rem 0.5rem;
                        font-size: 0.7rem;
                    }
                    
                    .redirect-banner-close {
                        width: 22px;
                        height: 22px;
                        font-size: 14px;
                    }
                    
                    body {
                        padding-top: 40px !important;
                    }
                }
                
                /* Extra small screens */
                @media (max-width: 360px) {
                    .redirect-banner-content {
                        flex-direction: column;
                        align-items: stretch;
                        gap: 0.4rem;
                        padding: 0.4rem;
                    }
                    
                    .redirect-banner-left {
                        justify-content: center;
                    }
                    
                    .redirect-banner-right {
                        justify-content: center;
                        gap: 0.8rem;
                    }
                    
                    .redirect-banner-text {
                        text-align: center;
                        white-space: normal;
                    }
                    
                    body {
                        padding-top: 60px !important;
                    }
                }
            </style>
        `;
        
        // Insert banner into page
        document.body.insertAdjacentHTML('afterbegin', bannerHTML);
        
        return document.getElementById('redirectBanner');
    }
    
    // Main function
    function initRedirectBanner() {
        // Check if banner already exists
        if (document.getElementById('redirectBanner')) {
            return;
        }
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initRedirectBanner);
            return;
        }
        
        // Create and show banner
        const banner = createBanner();
        
        // Event listeners
        document.getElementById('closeBanner').addEventListener('click', function() {
            banner.style.animation = 'slideUp 0.3s ease-in forwards';
            setTimeout(() => {
                if (banner && banner.parentNode) {
                    banner.parentNode.removeChild(banner);
                }
                // Reset body padding
                document.body.style.paddingTop = '';
            }, 300);
        });
        
        document.getElementById('redirectButton').addEventListener('click', function() {
            window.location.href = REDIRECT_URL;
        });
    }
    
    // Auto-initialize when script loads
    initRedirectBanner();
})();
