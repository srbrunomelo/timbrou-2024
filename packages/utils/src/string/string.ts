import { v4, v5 } from 'uuid'

function StringUtilsFactory() {
  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  function getInitials(name: string) {
    const words = name.split(' ');
    const initials = words
      .map((word) => word[0])
      .join('')
      .toUpperCase();
    if (initials.length >= 2) return initials.slice(0, 2);
    return words[0].slice(0, 2).toUpperCase();
  }

  function generateUUID5(namespace: string, name: string) {
    return v5(name, namespace);
  }

  function generateUUID() {
    return v4();
  }

  return {
    capitalize,
    getInitials,
    generateUUID5,
    generateUUID,
  };
}

export const StringUtils = StringUtilsFactory();
