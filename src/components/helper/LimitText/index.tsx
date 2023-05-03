export const limitTitle = (text: string) => {
  const maxLength = 30;
  if (text.length <= maxLength) {
    return text;
  } else {
    const truncatedText = text.substring(0, maxLength).trim();
    return `${truncatedText}...`;
  }
};

export const limitDescription = (text: string) => {
  const maxLength = 70;
  if (text.length <= maxLength) {
    return text;
  } else {
    const truncatedText = text.substring(0, maxLength).trim();
    return `${truncatedText}...`;
  }
};
