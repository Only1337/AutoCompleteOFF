/*document.querySelectorAll('input').forEach( input => {
  input.setAttribute("autocomplete", "off")
});*/

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function AutocompleteOFF(tagi) {
  eleme = document.getElementsByTagName(tagi);
  for (index = 0; index < eleme.length; ++index) {
    eleme[index].setAttribute("autocomplete", "off")
  }
}

//AutocompleteOFF('input');

document.onmousemove = function makeOK() {
  AutocompleteOFF('input');
}