const onAlert = () => {
    alert('Mamma is coming!');
}
const onConfirm = () => {
    const confirmValue = confirm('Are you sure to confirm?');
    if (confirmValue) {
        console.log('Confirmed');
    }
}
const onPrompt = () => {
    const promptValue = prompt('input your name');
    if (promptValue) {
        console.log(promptValue);
    }
}