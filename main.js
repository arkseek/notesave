let textarea = document.getElementById('text');

const textAreaFiles = textarea.addEventListener('input', function () {
    let text = textarea.value;
    console.log(text)
})


const txtFileSave = document.getElementById('saveTXT');

txtFileSave.addEventListener('click', function() {
    let text = textarea.value;

    const fileContent = text;
    const blob = new Blob([fileContent], { type: "text/plain"});

    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob)
    a.download = 'notesave.txt'
    document.body.appendChild(a);

    a.click();
    document.body.removeChild(a);
})