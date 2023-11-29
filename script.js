// Otteniamo il riferimento al contenitore della griglia nel DOM
const gridContainer = document.getElementById('grid-container');

// Funzione per generare la griglia quando l'utente clicca sul pulsante "Genera Griglia"
function generateGrid() {
    // Puliamo il contenuto del contenitore della griglia
    gridContainer.innerHTML = '';

    // Generiamo le bombe
    const bombsArray = generateBombs();

    // Cicliamo da 1 a 100 per creare le celle della griglia
    for (let i = 1; i <= 100; i++) {
        // Creiamo un elemento div per rappresentare una cella
        const cell = document.createElement('div');

        // Assegniamo il numero progressivo alla cella
        cell.textContent = i;

        // Aggiungiamo le classi CSS necessarie alla cella
        cell.classList.add('cell', `cell-${i}`);

        // Aggiungiamo un listener per gestire il clic sulla cella
        cell.addEventListener('click', () => handleClick(i, bombsArray));

        // Aggiungiamo la cella al contenitore della griglia
        gridContainer.append(cell);
    }
}

// Funzione per generare le bombe
function generateBombs() {
    const bombs = [];
    while (bombs.length < 16) {
        const bombPosition = Math.floor(Math.random() * 100) + 1;
        if (!bombs.includes(bombPosition)) {
            bombs.push(bombPosition);
        }
    }
    console.log("Posizioni delle bombe:", bombs);
    return bombs;
}

// Funzione chiamata quando l'utente clicca su una cella
function handleClick(cellNumber, bombsArray) {
    // Verifica se la cella cliccata è una bomba
    if (bombsArray.includes(cellNumber)) {
        // Il giocatore ha cliccato su una bomba
        console.log("Hai colpito una bomba! Partita terminata.");

        // Riveliamo tutte le bombe sulla griglia
        revealAllBombs(bombsArray);

        // Disabilitiamo i clic sulla griglia
        disableGridClick();

        // Aggiungi altre logiche necessarie per terminare la partita
    } else {
        // Il giocatore ha cliccato su una cella sicura
        console.log("Cella sicura. Continua il gioco.");

        // Seleziona la cella cliccata utilizzando la classe specifica
        const clickedCell = document.querySelector(`.cell-${cellNumber}`);

        // Verifica se l'elemento esiste prima di manipolarlo
        if (clickedCell) {
            // Aggiungiamo una classe alla cella cliccata per cambiare il suo stile
            clickedCell.classList.add('clicked');
        } else {
            // Stampa un errore se la cella non è stata trovata
            console.error(`Cella non trovata per il numero: ${cellNumber}`);
        }

        // Aggiungi ulteriori logiche per il gioco continuo, se necessario
    }
}

// Funzione per rivelare tutte le bombe al termine della partita
function revealAllBombs(bombsArray) {
    bombsArray.forEach(bombPosition => {
        const bombCell = document.querySelector(`.cell-${bombPosition}`);
        if (bombCell) {
            bombCell.classList.add('bomb');
        }
    });
}

// Funzione per disabilitare i clic sulla griglia
function disableGridClick() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.removeEventListener('click', () => {});
    });
}


  