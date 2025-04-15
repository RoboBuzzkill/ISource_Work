<template>
  <div class="home">
    <header class="header">
      <h1>My Web Projects</h1>
      <p class="subtitle">A showcase of my frontend development skills</p>
    </header>

    <div class="button-container">
      <router-link to="/practice" class="nav-button practice-button">
        <div class="button-content">
          <span class="icon">📝</span>
          <span class="button-title">Practice Website</span>
          <span class="button-description">HTML/CSS fundamentals and layouts</span>
        </div>
      </router-link>
      <router-link to="/matchgame" class="nav-button matchgame-button">
        <div class="button-content">
          <span class="icon">🎮</span>
          <span class="button-title">Match Game</span>
          <span class="button-description">Test your memory with this fun game</span>
        </div>
      </router-link>
      <router-link to="/calendar" class="nav-button calendar-button">
        <div class="button-content">
          <span class="icon">📅</span>
          <span class="button-title">Calendar App</span>
          <span class="button-description">Organize your schedule efficiently</span>
        </div>
      </router-link>
    </div>
    <footer class="footer">
      <p>Created with Vue.js • © 2025</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      isLoaded: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoaded = true;
      document.querySelector('.home').classList.add('loaded');
    }, 300);
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.8s ease;
}

.home.loaded {
  opacity: 1;
}

.header {
  text-align: center;
  margin: 40px 0;
}

h1 {
  margin-bottom: 10px;
  font-size: 2.8rem;
  color: #333;
  font-weight: 700;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
}

.button-container {
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 320px;
  margin: 20px 0 40px 0;
}

.nav-button {
  padding: 20px;
  border-radius: 12px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: transform 0.3s, box-shadow 0.3s;
  border: none;
  position: relative;
  overflow: hidden;
}

.nav-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(-100%);
  transition: transform 0.5s;
}

.nav-button:hover::before {
  transform: translateX(0);
}

.nav-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.button-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.icon {
  font-size: 2rem;
  margin-bottom: 5px;
}

.button-title {
  font-size: 1.4rem;
  margin-bottom: 5px;
}

.button-description {
  font-size: 0.9rem;
  opacity: 0.9;
  font-weight: normal;
  text-align: center;
}

.practice-button {
  background: linear-gradient(135deg, #9c27b0, #673ab7);
}

.matchgame-button {
  background: linear-gradient(135deg, #6ebeff, #0290d1);
}

.calendar-button {
  background: linear-gradient(135deg, #93be6f, #4caf50);
}

.footer {
  margin-top: auto;
  padding: 20px 0;
  font-size: 0.9rem;
  color: #777;
}

@media (min-width: 768px) {
  .button-container {
    flex-direction: row;
    width: auto;
    max-width: 900px;
  }
  
  .nav-button {
    width: 260px;
  }
}

@media (max-width: 767px) {
  h1 {
    font-size: 2.2rem;
  }
  
  .button-content {
    padding: 5px;
  }
}
</style>
