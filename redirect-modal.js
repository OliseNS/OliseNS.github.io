// Redirect Modal Functionality
(function() {
    // Configuration
    const REDIRECT_URL = 'https://olisemeka.dev/';
    const COUNTDOWN_TIME = 3000; // 3 seconds in milliseconds
      // Create modal HTML
    function createModal() {
        const modalHTML = `
            <div id="redirectModal" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="redirectModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content redirect-modal-content">
                        <div class="modal-header redirect-modal-header">
                            <div class="w-100 text-center">
                                <h4 class="modal-title redirect-modal-title" id="redirectModalLabel">
                                    <i class="fas fa-external-link-alt me-3"></i>
                                    Site Redirect Notice
                                </h4>
                            </div>
                        </div>
                        <div class="modal-body redirect-modal-body text-center">
                            <div class="redirect-icon-container mb-4">
                                <i class="fas fa-arrow-right redirect-arrow"></i>
                            </div>
                            <p class="redirect-main-text mb-4">
                                This site is now redirecting to the 
                                <span class="redirect-highlight">NEW WEBSITE</span>
                            </p>
                            <div class="redirect-url-container mb-4">
                                <code class="redirect-url">olisemeka.dev</code>
                            </div>
                            <div class="countdown-container">
                                <p class="countdown-text mb-2">Automatic redirect in</p>
                                <div class="countdown-circle">
                                    <span id="countdown" class="countdown-number">3</span>
                                </div>
                                <p class="countdown-subtext">seconds</p>
                            </div>
                        </div>
                        <div class="modal-footer redirect-modal-footer">
                            <button type="button" class="btn redirect-btn-stay" id="stayButton">
                                <i class="fas fa-times me-2"></i>Stay Here
                            </button>
                            <button type="button" class="btn redirect-btn-go" id="redirectButton">
                                <i class="fas fa-arrow-right me-2"></i>Go to olisemeka.dev
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <style>
                .redirect-modal-content {
                    background-color: #1a170f !important;
                    border: 2px solid #eec35e !important;
                    border-radius: 12px !important;
                    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.7) !important;
                }
                
                .redirect-modal-header {
                    background-color: #1a170f !important;
                    border-bottom: 1px solid #eec35e !important;
                    padding: 1.5rem 2rem !important;
                }
                
                .redirect-modal-title {
                    color: #eec35e !important;
                    font-size: 1.4rem !important;
                    font-weight: 600 !important;
                    letter-spacing: 0.04em !important;
                    text-transform: uppercase !important;
                    margin: 0 !important;
                }
                
                .redirect-modal-body {
                    background-color: #1a170f !important;
                    color: #eceae5 !important;
                    padding: 2rem !important;
                }
                
                .redirect-icon-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                
                .redirect-arrow {
                    font-size: 3rem !important;
                    color: #eec35e !important;
                    animation: pulse 2s infinite;
                }
                
                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.1); opacity: 0.8; }
                }
                
                .redirect-main-text {
                    font-size: 1.2rem !important;
                    line-height: 1.6 !important;
                    color: #eceae5 !important;
                    margin-bottom: 1.5rem !important;
                }
                
                .redirect-highlight {
                    color: #eec35e !important;
                    font-weight: 700 !important;
                    text-shadow: 0 0 10px rgba(238, 195, 94, 0.3);
                }
                
                .redirect-url-container {
                    background: rgba(238, 195, 94, 0.1) !important;
                    border: 1px solid #eec35e !important;
                    border-radius: 8px !important;
                    padding: 1rem !important;
                    margin: 1.5rem 0 !important;
                }
                
                .redirect-url {
                    font-family: 'Fira Code', monospace !important;
                    font-size: 1.3rem !important;
                    color: #eec35e !important;
                    background: none !important;
                    border: none !important;
                    font-weight: 600 !important;
                }
                
                .countdown-container {
                    margin: 2rem 0 !important;
                }
                
                .countdown-text {
                    font-size: 1rem !important;
                    color: #eceae5 !important;
                    margin-bottom: 1rem !important;
                }
                
                .countdown-circle {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 80px;
                    height: 80px;
                    border: 3px solid #eec35e;
                    border-radius: 50%;
                    background: rgba(238, 195, 94, 0.1);
                    margin: 0 auto 1rem;
                    animation: countdown-glow 1s ease-in-out infinite alternate;
                }
                
                @keyframes countdown-glow {
                    0% { 
                        box-shadow: 0 0 20px rgba(238, 195, 94, 0.3);
                        border-color: #eec35e;
                    }
                    100% { 
                        box-shadow: 0 0 30px rgba(238, 195, 94, 0.6);
                        border-color: rgba(238, 195, 94, 0.8);
                    }
                }
                
                .countdown-number {
                    font-size: 2.2rem !important;
                    font-weight: 700 !important;
                    color: #eec35e !important;
                    font-family: 'Fira Code', monospace !important;
                }
                
                .countdown-subtext {
                    font-size: 0.9rem !important;
                    color: rgba(236, 234, 229, 0.7) !important;
                    margin: 0 !important;
                }
                
                .redirect-modal-footer {
                    background-color: #1a170f !important;
                    border-top: 1px solid #eec35e !important;
                    padding: 1.5rem 2rem !important;
                    justify-content: center !important;
                    gap: 1rem;
                }
                
                .redirect-btn-stay {
                    background: transparent !important;
                    border: 2px solid #6c757d !important;
                    color: #eceae5 !important;
                    padding: 0.8rem 1.5rem !important;
                    font-size: 1rem !important;
                    font-weight: 500 !important;
                    border-radius: 8px !important;
                    transition: all 0.3s ease !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.02em !important;
                }
                
                .redirect-btn-stay:hover {
                    background: #6c757d !important;
                    color: #fff !important;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(108, 117, 125, 0.3);
                }
                
                .redirect-btn-go {
                    background: #eec35e !important;
                    border: 2px solid #eec35e !important;
                    color: #1a170f !important;
                    padding: 0.8rem 1.5rem !important;
                    font-size: 1rem !important;
                    font-weight: 600 !important;
                    border-radius: 8px !important;
                    transition: all 0.3s ease !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.02em !important;
                }
                
                .redirect-btn-go:hover {
                    background: rgba(238, 195, 94, 0.9) !important;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(238, 195, 94, 0.4);
                }
                
                .modal-backdrop {
                    background-color: rgba(0, 0, 0, 0.8) !important;
                }
                
                @media (max-width: 576px) {
                    .modal-lg {
                        max-width: 95% !important;
                        margin: 1rem auto !important;
                    }
                    
                    .redirect-modal-header,
                    .redirect-modal-body,
                    .redirect-modal-footer {
                        padding: 1rem !important;
                    }
                    
                    .redirect-modal-title {
                        font-size: 1.2rem !important;
                    }
                    
                    .redirect-main-text {
                        font-size: 1.1rem !important;
                    }
                    
                    .redirect-url {
                        font-size: 1.1rem !important;
                    }
                    
                    .countdown-circle {
                        width: 60px;
                        height: 60px;
                    }
                    
                    .countdown-number {
                        font-size: 1.8rem !important;
                    }
                    
                    .redirect-modal-footer {
                        flex-direction: column;
                        gap: 0.5rem;
                    }
                    
                    .redirect-btn-stay,
                    .redirect-btn-go {
                        width: 100%;
                        padding: 1rem !important;
                    }
                }
            </style>
        `;
        
        // Insert modal into page
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        return document.getElementById('redirectModal');
    }
    
    // Initialize countdown
    function startCountdown() {
        let timeLeft = 3;
        const countdownElement = document.getElementById('countdown');
        
        const interval = setInterval(function() {
            timeLeft--;
            if (countdownElement) {
                countdownElement.textContent = timeLeft;
            }
            
            if (timeLeft <= 0) {
                clearInterval(interval);
                window.location.href = REDIRECT_URL;
            }
        }, 1000);
        
        return interval;
    }
    
    // Main function
    function initRedirectModal() {
        // Check if modal already exists
        if (document.getElementById('redirectModal')) {
            return;
        }
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initRedirectModal);
            return;
        }
        
        // Create and show modal
        const modal = createModal();
        let countdownInterval;
        
        // Initialize Bootstrap modal
        const bsModal = new bootstrap.Modal(modal);
        
        // Event listeners
        document.getElementById('stayButton').addEventListener('click', function() {
            if (countdownInterval) {
                clearInterval(countdownInterval);
            }
            bsModal.hide();
        });
        
        document.getElementById('redirectButton').addEventListener('click', function() {
            window.location.href = REDIRECT_URL;
        });
        
        // Show modal and start countdown
        bsModal.show();
        
        // Start countdown after modal is shown
        modal.addEventListener('shown.bs.modal', function () {
            countdownInterval = startCountdown();
        });
        
        // Clean up interval if modal is hidden
        modal.addEventListener('hidden.bs.modal', function () {
            if (countdownInterval) {
                clearInterval(countdownInterval);
            }
        });
    }
    
    // Auto-initialize when script loads
    initRedirectModal();
})();
