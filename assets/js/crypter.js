// La letra "a" es convertida para "ai"
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Requisitos:

//     Debe funcionar solo con letras minúsculas
//     No deben ser utilizados letras con acentos ni caracteres especiales
//     Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

// Por ejemplo:
// "gato" => "gaitober"
// gaitober" => "gato"

//     La página debe tener campos para
//     inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
//     El resultado debe ser mostrado en la pantalla.

const textUser = document.querySelector("#textUser"),
  textResult = document.querySelector("#textResult"),
  btnEncriptar = document.querySelector("#btnEncriptar"),
  btnDescrifrar = document.querySelector("#btnDescifrar");


const encrypt = (textToEncrypt) => {
  textToEncrypt = textToEncrypt.toUpperCase();
  const textToEncryptArr = textToEncrypt.split("");
  for (let i = 0; i < textToEncryptArr.length; i++) {
    textToEncryptArr[i] === "A"
      ? (textToEncryptArr[i] = "AI")
      : textToEncryptArr[i] === "E"
      ? (textToEncryptArr[i] = "ENTER")
      : textToEncryptArr[i] === "I"
      ? (textToEncryptArr[i] = "IMES")
      : textToEncryptArr[i] === "O"
      ? (textToEncryptArr[i] = "OBER")
      : textToEncryptArr[i] === "U"
      ? (textToEncryptArr[i] = "UFAT")
      : (textToEncryptArr[i] = textToEncryptArr[i]);
  }
  return (textToEncrypt = textToEncryptArr.join(""));
};

btnEncriptar.addEventListener("click", () => {
  const text = textUser.value;
  textResult.value = encrypt(text);
});
