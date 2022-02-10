const
    textArea = document.getElementById('text'),
    uppBtn = document.getElementById('upper-case'),
    lwrBtn = document.getElementById('lower-case'),
    prpBtn = document.getElementById('proper-case'),
    sntBtn = document.getElementById('sentence-case'),
    saveBtn = document.getElementById('save-text-file'),
    copyBtn = document.getElementById('copy-text'),
    clrBtn = document.getElementById('clear-text');


uppBtn.addEventListener('click', () => {
    textArea.value = textArea.value.toUpperCase();
});

lwrBtn.addEventListener('click', () => {
    textArea.value = textArea.value.toLowerCase();
});

prpBtn.addEventListener('click', () => {
    let input = textArea.value.toLowerCase();
    let wordArray = input.split(" ");
    for (let i = 0; i < wordArray.length; i++) {
        wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
    }
    textArea.value = wordArray.join(" ");
});

sntBtn.addEventListener('click', () => {
    let input = textArea.value.toLowerCase();
    let phraseArray = input.split('.');
    console.log(phraseArray);
    for (let i = 0; i < phraseArray.length; i++) {
        let wordsArray = phraseArray[i].split(" ");
        for (let j = 0; j < wordsArray.length; j++) {
            if (wordsArray[j] !== "") {
                wordsArray[j] = wordsArray[j].charAt(0).toUpperCase() + wordsArray[j].slice(1);
                break;
            }
        }
        phraseArray[i] = wordsArray.join(" ");
    }
    textArea.value = phraseArray.join('.');
});


saveBtn.addEventListener('click', ()=> {
    const fileName = "text.txt";
    const text = textArea.value;
    download(fileName, text);
});

copyBtn.addEventListener('click', ()=>{
    copy();
});

clrBtn.addEventListener('click', ()=>{
    textArea.value = "";
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function copy(){
    let text = textArea.value;
    navigator.clipboard.writeText(text);
}
