<template>
    <div class="hero-section">
      <div class="content animate-fade-in">
        <h1 class="animate-slide-down">
          Birth control delivered every year for $65 🌈
        </h1>
        <div class="offer animate-pop-up">
          <span class="text-green-600">
            🙌 Birth Control prescribed from the comfort of your home! 🙌
          </span>
        </div>
        <button
          class="bg-gradient-to-r from-[#126b62] to-[#47b04b] text-white font-semibold px-12 py-3 rounded-full shadow-md hover:from-[#47b04b] hover:to-[#126b62] transition-all animate-bounce transition-all animate-bounce"
        >
          Get started
        </button>
        <p class="footer-text animate-fade-in-delay">
          Are you an existing patient? <br />
          To renew your birth control click ‘get started
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeroSection',
  };
  </script>
  
  <style scoped>
  /* Hero section layout */
  .hero-section {
    background-image: url('../assets/birth-control.jpeg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  /* Content container */
  .content {
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    padding: 20px;
  }
  
  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes slideDown {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  @keyframes popUp {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  .animate-fade-in {
    animation: fadeIn 1.5s ease-in-out;
  }
  
  .animate-fade-in-delay {
    animation: fadeIn 2s ease-in-out;
  }
  
  .animate-slide-down {
    animation: slideDown 1s ease-out;
  }
  
  .animate-pop-up {
    animation: popUp 1s ease-out;
  }
  
  .animate-bounce {
    animation: bounce 2s infinite;
  }
  
  /* Additional styling */
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .offer {
    background: #fff3e0;
    color: #ff7043;
    padding: 10px 20px;
    border-radius: 5px;
    margin-bottom: 1.5rem;
    display: inline-block;
    font-weight: bold;
  }
  
  .get-started {
    background: #47b04b;
    cursor: pointer;
  }
  
  .get-started:hover {
    background: #00695c;
  }
  
  .footer-text {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #e0f2f1;
  }
  </style>
  