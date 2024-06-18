const generateMistakeMessage = (mistakes) => {
    return mistakes.length > 0 ? mistakes.map(mistake => (
      `Question: ${mistake.questionId}\n` +
      `Correct Answer: ${mistake.correctAnswer}\n` +
      `Student's Answer: ${mistake.userAnswer}\n`
    )).join('\n') : 'No mistakes found'
};
  
export default generateMistakeMessage;