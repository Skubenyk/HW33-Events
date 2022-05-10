//* Даны дивы. По первому нажатию на каждый див он красится красным фоном, по второму красится обратно и так далее каждый клик происходит чередование фона. Сделайте так, чтобы было две функции: одна красит в красный цвет, другая в зеленый и они сменяли друг друга через removeEventListener.

const elements = document.querySelectorAll('div');
for (let j = 0; j < elements.length; j++) {
	elements[j].addEventListener('click', colorRed);
}

function colorRed() {
	this.style.background = 'red';
	this.removeEventListener('click', colorRed);
	this.addEventListener('click', colorGreen);
};

function colorGreen() {
	this.style.background = 'green';
	this.removeEventListener('click', colorGreen);
	this.addEventListener('click', colorRed);
};


//* Даны абзацы с числами. По нажатию на абзац в нем должен появится квадрат числа, которое он содержит.

const paragraphElement = document.querySelectorAll('p');
for (let j = 0; j < paragraphElement.length; j++) {
	paragraphElement[j].addEventListener('click', squareCalculation);
};

function squareCalculation() {
	this.innerHTML = this.innerHTML * this.innerHTML;
};


//* Дан ul, в нем несколько li. Под ul сделайте кнопку, по нажатию на которую в конец ul будет добавляться новый li с текстом 'пункт'. Сделайте так, чтобы при клике на каждый li, ему в конец добавлялся '!'. Это должно работать и для вновь добавленных li. Задачу решите с помощью делегирования (то есть событие должно быть навешано на ul).

const ul = document.getElementById('js-list');
ul.addEventListener('click', addSymbol);
function addSymbol(e) {
	e.target.innerHTML = e.target.innerHTML + '!';
};

const button = document.getElementById('js-button-add');
button.addEventListener('click', addItem);

function addItem() {
	const li = document.createElement('li');
	li.innerHTML = 'пункт';
	ul.append(li);
};
