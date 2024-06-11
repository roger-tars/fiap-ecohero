// js/challenge.js
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const challengeType = params.get('type');
    const challengeLevel = params.get('level');
    const challengeDetails = {
      exercise: {
        beginner: {
          image: 'images/exercise.png',
          title: 'Atividade Física - Iniciante',
          description: 'Complete atividades físicas diárias por 3 dias para manter sua saúde em dia.',
          points: '800xp',
          days: 3
        },
        intermediate: {
          image: 'images/exercise.png',
          title: 'Atividade Física - Intermediário',
          description: 'Complete atividades físicas diárias por 5 dias para manter sua saúde em dia.',
          points: '1200xp',
          days: 5
        },
        advanced: {
          image: 'images/exercise.png',
          title: 'Atividade Física - Avançado',
          description: 'Complete atividades físicas diárias por 7 dias para manter sua saúde em dia.',
          points: '1500xp',
          days: 7
        }
      },
      volunteering: {
        image: 'images/voluntariado.png',
        title: 'Voluntariado',
        description: 'Participe de atividades de voluntariado por 30 dias para ajudar a comunidade e ganhar pontos.',
        points: '1500xp',
        days: 30
      },
      waste: {
        image: 'images/waste.jpg',
        title: 'Separação do Lixo',
        description: 'Separe seu lixo corretamente todos os dias por uma semana para ajudar na reciclagem.',
        points: '800xp',
        days: 7
      },
      gardening: {
        image: 'images/horta.png',
        title: 'Horta Doméstica',
        description: 'Cultive uma horta em casa e use plantas do seu próprio cultivo por 30 dias.',
        points: '1200xp',
        days: 30
      }
    };
  
    let details;
    if (challengeType && challengeLevel) {
      details = challengeDetails[challengeType][challengeLevel];
    } else if (challengeType) {
      details = challengeDetails[challengeType];
    }
  
    if (details) {
      document.getElementById('challenge-image').src = details.image;
      document.getElementById('challenge-title').textContent = details.title;
      document.getElementById('challenge-description').textContent = details.description;
      document.getElementById('challenge-points').textContent = details.points;
      document.getElementById('day-count').value = details.days;
    } else {
      document.getElementById('challenge-description').textContent = 'Detalhes do desafio não encontrados.';
    }
  
    const acceptButton = document.getElementById('accept-button');
    const declineButton = document.getElementById('decline-button');
    const challengeForm = document.getElementById('upload-form');
    const acceptedStatus = document.getElementById('accepted-status');
    const uploadPreview = document.getElementById('uploaded-images');
    const uploadPreviewContainer = document.getElementById('upload-preview');
  
    // Check if the challenge is already accepted
    const isChallengeAccepted = localStorage.getItem(`${challengeType}-${challengeLevel}-accepted`);
  
    if (isChallengeAccepted) {
      challengeForm.style.display = 'block';
      declineButton.style.display = 'inline-block';
      acceptButton.style.display = 'none';
      acceptedStatus.style.display = 'block';
      uploadPreviewContainer.style.display = 'block';
      loadUploadedImages();
    }
  
    acceptButton.addEventListener('click', function() {
      challengeForm.style.display = 'block';
      declineButton.style.display = 'inline-block';
      acceptButton.style.display = 'none';
      acceptedStatus.style.display = 'block';
      uploadPreviewContainer.style.display = 'block';
      localStorage.setItem(`${challengeType}-${challengeLevel}-accepted`, true);
    });
  
    declineButton.addEventListener('click', function() {
      challengeForm.style.display = 'none';
      declineButton.style.display = 'none';
      acceptButton.style.display = 'inline-block';
      acceptedStatus.style.display = 'none';
      uploadPreviewContainer.style.display = 'none';
      uploadPreview.innerHTML = ''; // Clear uploaded images
      localStorage.removeItem(`${challengeType}-${challengeLevel}-accepted`);
      localStorage.removeItem(`${challengeType}-${challengeLevel}-uploads`);
    });
  
    const photoUploadInput = document.getElementById('photo-upload');
    const dayCount = document.getElementById('day-count').value;
  
    photoUploadInput.addEventListener('change', function() {
      const files = photoUploadInput.files;
      if (files.length > dayCount) {
        alert(`Você só pode enviar até ${dayCount} imagens.`);
        return;
      }
  
      uploadPreview.innerHTML = ''; // Clear previous images
      const uploads = [];
  
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
  
        reader.onload = function(event) {
          const img = document.createElement('img');
          img.src = event.target.result;
          uploadPreview.appendChild(img);
          uploads.push(event.target.result);
        };
  
        reader.readAsDataURL(file);
      }
  
      localStorage.setItem(`${challengeType}-${challengeLevel}-uploads`, JSON.stringify(uploads));
    });
  
    function loadUploadedImages() {
      const uploads = JSON.parse(localStorage.getItem(`${challengeType}-${challengeLevel}-uploads`));
      if (uploads) {
        uploads.forEach(upload => {
          const img = document.createElement('img');
          img.src = upload;
          uploadPreview.appendChild(img);
        });
      }
    }
  });
  
  
  
  
  
  