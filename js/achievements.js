fetch('data/achievements.json')
  .then(response => response.json())
  .then(data => {
    const ticker = document.getElementById('achievementTicker');

    // Create first achievements block
    const achievementsBlock = document.createElement('div');

    data.forEach(text => {
      const span = document.createElement('span');
      span.classList.add('achievement');
      span.textContent = text;
      achievementsBlock.appendChild(span);
    });

    // Clone the block
    const cloneBlock = achievementsBlock.cloneNode(true);

    // Append both to ticker
    ticker.appendChild(achievementsBlock);
    ticker.appendChild(cloneBlock);
  })
  .catch(error => {
    console.error('Error loading achievements:', error);
  });
