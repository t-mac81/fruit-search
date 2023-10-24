import { fruit } from './fruit.js';
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

function search(str) {
  let results = [];
  if (str.length !== 0) {
    results = fruit.filter(fruit => fruit.toLowerCase().includes(str));
  }
  return results;
}

function searchHandler(e) {
  const searchText = input.value.toLowerCase();
  showSuggestions(search(searchText), searchText);
}

function showSuggestions(results, inputVal) {
  // clear the ul list (remove all children)
  clearSuggestions();
  //add the list of suggestions (use forEach to append li to ul)
  results.forEach(result => {
    const resultItem = document.createElement('li');
    resultItem.innerText = result;
    suggestions.append(resultItem);
  });
}

function useSuggestion(e) {
  // add suggestion to input.value clear the suggestions list
  const suggestion = e.target.innerText;
  input.value = suggestion;
  clearSuggestions();
}

function clearSuggestions() {
  // clear the ul list (remove all children)
  suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
