async function getQuote() {
    try {
      const response = await fetch('https://api.quotable.io/random?tags=motivational');
      const data = await response.json();
      displayQuote(data);
    } catch (error) {
      console.error('Erro ao buscar citação:', error);
    }
  }
  
  function displayQuote(data) {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerHTML = `"${data.content}" - ${data.author}`;
  }
  
  document.addEventListener('DOMContentLoaded', getQuote);
  
  
  