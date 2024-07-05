

export function useSentence(str){
let firstChar = str.charAt(0);
let restChars = str.substring(1);
let sentence = `${firstChar.toUpperCase()}${restChars.toLowerCase()}`;
return sentence;
}