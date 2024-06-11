// js/rewards.js
document.addEventListener('DOMContentLoaded', function() {
    const rewards = [
      { id: 'reward1', name: 'EchoDot', points: '10.000xp', image: 'images/echodot.jpg' },
      { id: 'reward2', name: 'Day Off', points: '20.000xp', image: 'images/day-off.jpg' },
      { id: 'reward3', name: 'Jantar Maní 2 Pessoas', points: '30.000xp', image: 'images/jantar.png' },
      { id: 'reward4', name: 'Chá da Tarde Tangará', points: '20.000xp', image: 'images/tangara.jpg' },
      { id: 'reward5', name: 'Spa Day', points: '25.000xp', image: 'images/spa.jpg' }
    ];
  
    const cardsContainer = document.getElementById('rewards-cards');
  
    rewards.forEach(reward => {
      const card = document.createElement('div');
      card.className = 'card';
  
      const cardImage = document.createElement('div');
      cardImage.className = 'card-image';
      cardImage.style.backgroundImage = `url(${reward.image})`;
  
      const cardContent = document.createElement('div');
      cardContent.className = 'card-content';
  
      const cardTitle = document.createElement('h3');
      cardTitle.textContent = reward.name;
  
      const cardPoints = document.createElement('p');
      cardPoints.textContent = `Pontos necessários: ${reward.points}`;
  
      const switchLabel = document.createElement('label');
      switchLabel.className = 'switch';
  
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.dataset.reward = reward.id;
  
      const slider = document.createElement('span');
      slider.className = 'slider round';
  
      const toggleText = document.createElement('span');
      toggleText.className = 'toggle-text';
      toggleText.textContent = 'Desbloquear Recompensa';
  
      switchLabel.appendChild(input);
      switchLabel.appendChild(slider);
      switchLabel.appendChild(toggleText);
  
      cardContent.appendChild(cardTitle);
      cardContent.appendChild(cardPoints);
      cardContent.appendChild(switchLabel);
  
      card.appendChild(cardImage);
      card.appendChild(cardContent);
  
      cardsContainer.appendChild(card);
  
      const isUnlocked = localStorage.getItem(reward.id) === 'true';
  
      if (isUnlocked) {
        input.checked = true;
        input.disabled = true;
        toggleText.textContent = 'Recompensa Desbloqueada';
      }
  
      input.addEventListener('change', function() {
        if (this.checked) {
          alert('Recompensa desbloqueada!');
          localStorage.setItem(reward.id, 'true');
          this.disabled = true;
          toggleText.textContent = 'Recompensa Desbloqueada';
          slider.style.backgroundColor = '#ffcc00';
          slider.style.borderColor = '#ffcc00';
        } else {
          alert('Recompensa bloqueada.');
          localStorage.removeItem(reward.id);
        }
      });
    });
  });
  
  