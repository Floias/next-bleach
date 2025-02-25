export function copyTextToClipboard(button: HTMLButtonElement) {
  const textToCopy = button.innerText;
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      console.log(`Текст скопирован: ${textToCopy}`);
    })
    .catch(() => {
      console.log('Ошибка при копировании текста');
    });
}