const ref = {
  input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
};

const changeOutputTextContent = function() {
      if (ref.nameLabel.textContent =
      ref.input.value.length > 0) {
       ref.nameLabel.textContent = ref.input.value
    } else {
      ref.nameLabel.textContent = "незнакомец"
    }
}
  
ref.input.addEventListener("input", changeOutputTextContent);

/*
Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>
*/
