function fetchAddress() {
  const cep = document.getElementById('cep').value.replace(/\D/g, '');

  if (cep.length !== 8) {
    alert('Por favor, insira um CEP válido.');
    return;
  }

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
      if (data.erro) {
        alert('CEP não encontrado.');
        return;
      }

      document.getElementById('street').value = data.logradouro;
      document.getElementById('neighborhood').value = data.bairro;
      document.getElementById('city').value = data.localidade;
      document.getElementById('state').value = data.uf;
    })
    .catch(error => {
      alert('Erro ao buscar o CEP.');
      console.error(error);
    });
}

function loadProfile() {
  const profile = JSON.parse(localStorage.getItem('profile'));
  if (profile) {
    document.getElementById('cep').value = profile.cep;
    document.getElementById('street').value = profile.street;
    document.getElementById('number').value = profile.number;
    document.getElementById('complement').value = profile.complement;
    document.getElementById('neighborhood').value = profile.neighborhood;
    document.getElementById('city').value = profile.city;
    document.getElementById('state').value = profile.state;
    if (profile.avatar) {
      document.querySelector('.avatar').style.backgroundImage = `url(${profile.avatar})`;
    }
  }
}

document.getElementById('edit-profile-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const avatar = document.getElementById('avatar').files[0];
  const reader = new FileReader();
  reader.onloadend = function() {
    const profile = {
      avatar: reader.result,
      cep: document.getElementById('cep').value,
      street: document.getElementById('street').value,
      number: document.getElementById('number').value,
      complement: document.getElementById('complement').value,
      neighborhood: document.getElementById('neighborhood').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value
    };

    localStorage.setItem('profile', JSON.stringify(profile));
    alert('Perfil atualizado com sucesso!');
  };

  if (avatar) {
    reader.readAsDataURL(avatar);
  } else {
    const profile = {
      avatar: null,
      cep: document.getElementById('cep').value,
      street: document.getElementById('street').value,
      number: document.getElementById('number').value,
      complement: document.getElementById('complement').value,
      neighborhood: document.getElementById('neighborhood').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value
    };

    localStorage.setItem('profile', JSON.stringify(profile));
    alert('Perfil atualizado com sucesso!');
  }
});

document.addEventListener('DOMContentLoaded', loadProfile);



  