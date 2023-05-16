const translations = {
  'malay': {
    'morning': 'pagi'
  },
  'english': {
    'pagi' : 'morning'
  }
};

export function translate(language, inputText) {
  const word = translations[language][inputText];
  if (word) {
    return word;
  } else {
    return inputText;
  }
}
