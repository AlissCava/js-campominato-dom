// Otteniamo il riferimento al contenitore della griglia nel DOM
const gridContainer = document.getElementById('grid-container');

// Funzione per generare la griglia quando l'utente clicca sul pulsante "Genera Griglia"
function generateGrid() {

    // Puliamo il contenuto del contenitore della griglia
    gridContainer.innerHTML = '';
  
    // Cicliamo da 1 a 100 per creare le celle della griglia
    for (let i = 1; i <= 100; i++) {
        // Creiamo un elemento div per rappresentare una cella
        const cell = document.createElement('div');

        // Assegniamo il numero progressivo alla cella
        cell.textContent = i;

        // Aggiungiamo le classi CSS necessarie alla cella
        cell.classList.add('cell', `cell-${i}`);

        // Aggiungiamo un listener per gestire il clic sulla cella
        cell.addEventListener('click', () => handleClick(i));

        // Aggiungiamo la cella al contenitore della griglia
        gridContainer.appendChild(cell);
    }
}
  


// Funzione chiamata quando l'utente clicca su una cella
function handleClick(cellNumber) {

    // Stampiamo il numero della cella cliccata nella console
    console.log(`Cella cliccata: ${cellNumber}`);
  
    // Selezioniamo la cella cliccata utilizzando la classe specifica
    const clickedCell = document.querySelector(`.cell-${cellNumber}`);
  
    // Verifica se l'elemento esiste prima di manipolarlo
    if (clickedCell) {
      // Aggiungiamo una classe alla cella cliccata per cambiare il suo stile
      clickedCell.classList.add('clicked');
    } 
    
    else {
      console.error(`Cella non trovata per il numero: ${cellNumber}`);
    }
}
  