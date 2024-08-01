"use strict";
const textArea = document.getElementById("textArea");
const image = document.getElementById('img');
const messageTitle = document.getElementById('tituloMensaje');
const encryptedText = document.getElementById('textoEncriptado');
const asideElement = document.getElementById("aside");
const coincidence = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
};
const newCoincidence = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
};
const clearTextValue = () => {
    if (textArea) {
        textArea.value === "Ingresa el texto aquí" ? (textArea.value = "") : (textArea.value = textArea.value);
    }
    else {
        console.error("Element with ID 'textArea not found.");
    }
};
const createCopyButton = () => {
    const existingButton = document.getElementById("copyButton");
    if (existingButton)
        return;
    const newButton = document.createElement("button");
    newButton.id = "copyButton";
    newButton.textContent = "Copiar";
    newButton.classList.add("bg-[#D8DFE8]", "text-[#0A3871]", "w-[328px]", "h-[67px]", "rounded", "hover:bg-[#BFC8D1]");
    newButton.style.marginLeft = "35%";
    newButton.addEventListener("click", function () {
        const selection = window.getSelection();
        const range = document.createRange();
        if (encryptedText) {
            range.selectNodeContents(encryptedText);
            selection === null || selection === void 0 ? void 0 : selection.removeAllRanges();
            selection === null || selection === void 0 ? void 0 : selection.addRange(range);
            document.execCommand("copy");
            selection === null || selection === void 0 ? void 0 : selection.removeAllRanges();
            alert("Has copiado el Texto");
        }
        else {
            console.error("Element with ID 'encryptedText' not found.");
        }
    });
    asideElement ? asideElement.appendChild(newButton) : console.error('Element with ID asideElement not found.');
};
const encrypt = () => {
    debugger;
    let textResult = '';
    if (!textArea) {
        console.error("Element with ID 'textArea not found.");
    }
    else if (textArea.value === "Ingresa el texto aquí" || !textArea.value) {
        textArea.value = 'Ingresa el texto aquí';
    }
    else {
        textResult = textArea.value.toLowerCase().replace(/a|e|i|o|u/g, (match) => {
            return coincidence[match];
        });
        image === null || image === void 0 ? void 0 : image.remove();
        !messageTitle ? console.error('Element with ID tituloMensaje not found.') : messageTitle.innerHTML = "Tu mensaje encriptado es ";
        !encryptedText ? console.error('Element with ID textoEncriptado not found.') : encryptedText.innerHTML = textResult;
        createCopyButton();
    }
};
const decrypt = () => {
    let secondTextResult = "";
    if (!encryptedText) {
        console.error("Element with ID textArea not found.");
    }
    else {
        secondTextResult = encryptedText.innerText.replace(/ai|enter|imes|ober|ufat/g, function (match) {
            return newCoincidence[match];
        });
    }
    if (!encryptedText) {
        console.error('El elemento con ID "textoEncriptado" no tiene un valor válido.');
    }
    else if (encryptedText.innerText !== "Ingresa el texto que deseas encriptar o desencriptar") {
        if (!messageTitle) {
            console.error('Element with ID tituloMensaje not found');
        }
        else {
            messageTitle.innerHTML = "Tu mensaje desencriptado es ";
        }
        if (encryptedText) {
            encryptedText.innerHTML = secondTextResult;
            createCopyButton();
        }
    }
};
