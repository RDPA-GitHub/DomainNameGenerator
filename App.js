const Pronombre = ['The', 'Our'];
const Adjetivo = ['great', 'big'];
const Sustantivo = ['jogger', 'racoon'];
const Extension = ['.com', '.cl', '.ve', '.org'];

// Recorremos cada uno de los arrays

var domainsList = document.getElementById('domains-list');

Pronombre.forEach(p => {
  Adjetivo.forEach(a => {
    Sustantivo.forEach(s => {
      Extension.forEach(e => {
        // Concatenamos los elementos y creamos el nombre de dominio
        const Dominio = `${p}${a}${s}${e}`;
        var li = document.createElement('li');
        li.classList.add("List-Item");
        var texto = document.createTextNode(Dominio);
        li.appendChild(texto);
        domainsList.appendChild(li);
      });
    });
  });
});

