function clearTextValue() {
  document.getElementById("textArea").value === "Ingresa el texto aquí"
    ? (document.getElementById("textArea").value = "")
    : (document.getElementById("textArea").value =
        document.getElementById("textArea").value);
}

function encriptar() {
  let textResult = "";
  const textValueArray = document.getElementById("textArea").value.toLowerCase().split("");
  for (let i = 0; i < textValueArray.length; i++) {
    if (textValueArray[i] === "a") {
      textResult += "ai";
    } else if (textValueArray[i] === "e") {
      textResult += "enter";
    } else if (textValueArray[i] === "i") {
      textResult += "imes";
    } else if (textValueArray[i] === "o") {
      textResult += "ober";
    } else if (textValueArray[i] === "u") {
      textResult += "ufat";
    } else {
      textResult += textValueArray[i];
    }
  }
  if (
    document.getElementById("textArea").value === "Ingresa el texto aquí" ||
    !document.getElementById("textArea").value
  ) {
    document.getElementById("textArea").value = "Ingresa el texto aquí";
  } else {
    document.getElementById("img").remove();
    document.getElementById("tituloMensaje").innerHTML =
      "Tu mensaje encriptado es";
    document.getElementById("textoEncriptado").innerHTML = textResult;
    const newButton = document.createElement("button");
    newButton.textContent = "Copiar";
    newButton.classList.add(
      "bg-[#D8DFE8]",
      "text-[#0A3871]",
      "w-[328px]",
      "h-[67px]",
      "rounded",
      "hover:bg-[#BFC8D1]"
    );
    newButton.style.marginLeft = "35%";
    newButton.addEventListener("click", function () {
      const textoEncriptado = document.getElementById("textoEncriptado");
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(textoEncriptado);
      selection.removeAllRanges();
      selection.addRange(range);
      //Según la documentación del MDN el método execCommand para copiar está deprecated, sin embargo sigue siendo funcional
      //para eventos de vida cortos como un click handler, siendo precisamente útil para el desarrollo de éste ejercicio.
      document.execCommand("copy");
      selection.removeAllRanges();
      alert("Has copiado el Texto");
    });
    const asideElement = document.getElementById("aside");
    asideElement.appendChild(newButton);
  }
}

function desencriptar() {
  const encriptedValueText =
    document.getElementById("textoEncriptado").innerText;
  const decryptText = document.getElementById("textArea").value.toLowerCase();
  if (!encriptedValueText) {
    console.error(
      'El elemento con ID "textoEncriptado" no tiene un valor válido.'
    );
    return;
  }
  const newCoincidence = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };

  let textResult = encriptedValueText.replace(
    /ai|enter|imes|ober|ufat/g,
    function (match) {
      return newCoincidence[match];
    }
  );
  let textResultDos = decryptText.replace(
    /ai|enter|imes|ober|ufat/g,
    function (match) {
      return newCoincidence[match];
    }
  );

  if (
    encriptedValueText !==
    "Ingresa el texto que deseas encriptar o desencriptar"
  ) {
    document.getElementById("tituloMensaje").innerHTML =
      "Tu mensaje desencriptado es";
    document.getElementById("textoEncriptado").innerHTML = textResult;
  } else if (
    document.getElementById("textArea").value !== "Ingresa el texto aquí"
  ) {
    document.getElementById("img").remove();
    document.getElementById("tituloMensaje").innerHTML =
      "Tu mensaje desencriptado es";
    document.getElementById("textoEncriptado").innerHTML = textResultDos;
    const newButton = document.createElement("button");
    newButton.textContent = "Copiar";
    newButton.classList.add(
      "bg-[#D8DFE8]",
      "text-[#0A3871]",
      "w-[328px]",
      "h-[67px]",
      "rounded",
      "hover:bg-[#BFC8D1]"
    );
    newButton.style.marginLeft = "35%";
    newButton.addEventListener("click", function () {
      const textoEncriptado = document.getElementById("textoEncriptado");
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(textoEncriptado);
      selection.removeAllRanges();
      selection.addRange(range);
      //Según la documentación del MDN el método execCommand para copiar está deprecated, sin embargo sigue siendo funcional
      //para eventos de vida cortos como un click handler, siendo precisamente útil para el desarrollo de éste ejercicio.
      document.execCommand("copy");
      selection.removeAllRanges();
      alert("Has copiado el Texto");
    });
    const asideElement = document.getElementById("aside");
    asideElement.appendChild(newButton);
  } else {
    document.getElementById("textArea").innerText = "Ingresa el texto aquí";
  }
}
