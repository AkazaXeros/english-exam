const getTextForIndex = (index, textArray) => {
    if (index >= 15 && index <= 19) return textArray[0]?.text;
    if (index >= 35 && index <= 39) return textArray[1]?.text;
    if (index >= 55 && index <= 59) return textArray[2]?.text;
    if (index >= 75 && index <= 79) return textArray[3]?.text;
    if (index >= 95 && index <= 99) return textArray[4]?.text;
    return '';
};
  
export default getTextForIndex;