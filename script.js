import { fruit } from './fruit.js';
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

function search(str) {
  let results = [];
  // only display results if there is a search string
  if (str.length !== 0) {
    // filter fruit array by search string
    results = fruit.filter(fruit => fruit.toLowerCase().includes(str));
  }
  return results;
}

function searchHandler(e) {
  const searchText = input.value.toLowerCase();
  showSuggestions(search(searchText), searchText);
}

function showSuggestions(results, inputVal) {
  // clear the suggestion list
  clearSuggestions();
  // add the list of suggestions (use forEach to append li to ul)
  results.forEach(result => {
    const resultItem = document.createElement('li');
    // new string to bold
    const boldResult = result
      .toLowerCase()
      .replaceAll(inputVal, `<b>${inputVal}</b>`);

    // capitalize bold result
    const boldResultCap = capitalizeBoldResult(boldResult);

    // add result string to the suggestion list
    resultItem.innerHTML = boldResultCap;
    suggestions.append(resultItem);
  });
}

// add suggestion to input.value clear the suggestions list
// (only use inner text so there no bold letters)
function useSuggestion(e) {
  const suggestion = e.target.innerText;
  input.value = suggestion;
  clearSuggestions();
}

// clear the suggestions list
function clearSuggestions() {
  suggestions.innerHTML = '';
}

// capitalize each word in the suggestion list
function capitalizeBoldResult(boldResult) {
  if (boldResult[0] === '<') {
    return `<b>${boldResult.charAt(3).toUpperCase()}${boldResult.slice(4)}`;
  } else {
    return `${boldResult.charAt(0).toUpperCase()}${boldResult.slice(1)}`;
  }
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
