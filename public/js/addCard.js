const form = document.querySelector('.add-form-card');

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const formLog = event.target;
  console.log('form', formLog);
  const { engword, rusword, themetitle } = formLog;

  const response = await fetch('/api/personal/add-card', {
    method: 'POST',
    body: JSON.stringify({
      eng_word: engword.value,
      rus_word: rusword.value,
      theme_title: themetitle.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

})