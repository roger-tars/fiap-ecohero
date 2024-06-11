// js/ranking.js
document.addEventListener('DOMContentLoaded', function() {
    const rankingData = [
      { name: 'Nome 1', points: '15000xp', avatar: 'images/avatar.png' },
      { name: 'Nome 2', points: '14500xp', avatar: 'images/avatar.png' },
      { name: 'Nome 3', points: '14000xp', avatar: 'images/avatar.png' },
      { name: 'Nome 4', points: '13500xp', avatar: 'images/avatar.png' },
      { name: 'Nome 5', points: '13000xp', avatar: 'images/avatar.png' },
      { name: 'Nome 6', points: '12500xp', avatar: 'images/avatar.png' },
      { name: 'Nome 7', points: '12000xp', avatar: 'images/avatar.png' },
      { name: 'Nome 8', points: '11500xp', avatar: 'images/avatar.png' },
      { name: 'Nome 9', points: '11000xp', avatar: 'images/avatar.png' },
      { name: 'Nome 10', points: '10500xp', avatar: 'images/avatar.png' }
    ];
  
    const rankingList = document.getElementById('ranking-list');
  
    rankingData.forEach(item => {
      const rankingItem = document.createElement('div');
      rankingItem.className = 'ranking-item';
  
      const avatar = document.createElement('img');
      avatar.src = item.avatar;
      avatar.alt = 'Avatar';
  
      const name = document.createElement('span');
      name.className = 'name';
      name.textContent = item.name;
  
      const points = document.createElement('span');
      points.className = 'points';
      points.textContent = item.points;
  
      rankingItem.appendChild(avatar);
      rankingItem.appendChild(name);
      rankingItem.appendChild(points);
  
      rankingList.appendChild(rankingItem);
    });
  });
  