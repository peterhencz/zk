import strings from './resources/strings';

const Strings = stringKey => {
  const lang = window.navigator.language;

  switch (lang) {
    case 'hu':
      return strings.hu[stringKey];
    default:
      return strings.hu[stringKey];
  }
};

export default Strings;
