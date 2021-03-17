$(document).ready(function() {

  // informazioni di un singolo studente da stampare nell'html
  var studente1 = {
    nome: "Gianpiero",
    cognome: "Ubaldi",
    età: "15 anni"
  }

// stampo tutte le informazioni di studente1 con un ciclo for...in
  stampaOgetto(studente1)

  // variabile contenente ogetti costituiti dalle informazioni di un singolo studente
  var classe29 = [
    {
      nome:"Mario",
      cognome:"Rossi",
      età: "16 anni"
    },
    {
      nome:"Luca",
      cognome:"Verdi",
      età: "14 anni"
    },
    {
      nome:"Paolo",
      cognome:"Bianchi",
      età: "15 anni"
    }
  ]

  // scorro tutti gli ogetti nella variabile classe 29 e riporto le chiavi "nome" e "cognome"
  stampaStudenti(classe29)

  // al click bel bottone con id "aggiungi-studente" aggiungo i dati inseriti negli input alla lista degli studenti classe 29
  $("#aggiungi-studente").click(function() {
    aggiungiStudente()
  })

})

// FUNZIONI

function stampaOgetto(ogetto) {

  var lista1 = $("#lista1")

  for (var key in ogetto) {
    lista1.append("<li>" + ogetto[key] + "</li>")
  }

}

function stampaStudenti(ogetto2) {

  var lista2 = $("#lista2")

  for (var key in ogetto2) {
    lista2.append("<li>" + ogetto2[key].nome + " " + ogetto2[key].cognome + "</li>")
  }
}

function aggiungiStudente() {

  var nuovoStudente = {
    nome:"",
    cognome:"",
    età: ""
  }

  nuovoStudente.nome = $("#nome").val()
  nuovoStudente.cognome = $("#cognome").val()
  nuovoStudente.età = $("#età").val()

  // se ogni campo è stato riempito eseguo la funzione, in caso contrario avviso l'utente dell'errore
  if (nuovoStudente.nome.length >= 1 && nuovoStudente.cognome.length >= 1 && nuovoStudente.età.length >= 1) {
    $("#lista2").append("<li>" + nuovoStudente.nome + " " + nuovoStudente.cognome + "</li>")
  } else {
    alert("Informazioni mancanti!")
  }

}
