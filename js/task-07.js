const ref = {
  input: document.querySelector("#font-size-control"),
  textlabel: document.querySelector("#text"),
};

const onInputChange = function () { ref.textlabel.style.fontSize = `${ref.input.value}px` };

ref.input.addEventListener("input", onInputChange);

/*
Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>
*/
