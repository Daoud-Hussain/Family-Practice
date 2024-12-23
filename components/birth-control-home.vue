<template>
    <div class="hero-section">
        <div class="content">
            <h1>Birth control delivered every year for $65 🌈</h1>
            <div class="offer">
                <span class="text-green-600">🙌 Birth Control prescribed from the comfort of your home! 🙌</span>
            </div>
            <!-- <button class="get-started">Get started</button> -->
            <button
          class="bg-green-600 text-white py-2 px-12 font-semibold rounded-full shadow-lg transition-all"
        >
          Get started
        </button>
            <p class="footer-text">Are you an existing patient? <br /> To
                renew your birth control click ‘get
                started</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeroSection',
};
</script>

<style scoped>
.hero-section {
    background-image: url('../assets/birth-control.jpeg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    /* Full screen height */
    width: 100%;
    /* Full screen width */
    display: flex;
    justify-content: center;
    align-items: center;
}

.content {
    background: rgba(0, 0, 0, 0.8);
    ;
    /* Full black background */
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    display: flex;
    flex-direction: column;
    /* Stack children vertically */
    justify-content: center;
    /* Center vertically */
    align-items: center;
    /* Center horizontally */
    text-align: center;
    color: white;
    padding: 20px;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.offer {
    background: #fff3e0;
    /* Light orange */
    color: #ff7043;
    /* Vibrant orange */
    padding: 10px 20px;
    border-radius: 5px;
    margin-bottom: 1.5rem;
    display: inline-block;
    font-weight: bold;
}

.get-started {
    background: #004d40;
    /* Dark green */
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;
}

.get-started:hover {
    background: #00695c;
    /* Slightly lighter green */
}

.footer-text {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #e0f2f1;
    /* Light green */
}
</style>