// URL dello script Google Apps
const scriptURL = 'https://script.google.com/macros/s/AKfycbwPIJ8s4JgvFktuksO5yUFdeZEe6PR-d_IRVZJwysu3DuXiNzcoTtsWjOEuoGYCJo2L/exec';

// Seleziona il form con nome 'date-form'
const form = document.forms['date-form'];

form.addEventListener('submit', e => {
  e.preventDefault(); // Previeni l'invio del form finché la validazione non è completata

  let invia = true;
  const input = document.getElementById("verifica").value;
  const wr = [65, 101, 46, 48, 48]; // Codici dei caratteri corretti

  // Confronta la lunghezza della parola inserita con quella corretta
  if (input.length !== wr.length) {
    document.getElementById('visibile-box').disabled = true;
    invia = false;
  } else {
    // Confronta i caratteri della parola inserita con i valori corretti
    for (let i = 0; i < input.length; i++) {
      if (input.charCodeAt(i) !== wr[i]) {
        document.getElementById('visibile-box').disabled = true;
        alert('Il form non è stato inviato!');
        invia = false;
        break;
      }
    }
  }

  if (invia) {
    // Invia il form solo se la validazione è passata
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        if (response.ok) {
          alert("Grazie per aver compilato il form. È stato inviato con successo!");
          window.location.reload(); // Ricarica la pagina dopo l'invio
        } else {
          throw new Error('Errore nel caricamento del form');
        }
      })
      .catch(error => console.error('Error!', error.message));
  }
});
