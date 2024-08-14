const htmlInput = document.getElementById('html-input');
const cssInput = document.getElementById('css-input');
const cssFrame = document.getElementById('css-area');
const outputFrame = document.getElementById('html-css-output');

function updateOutput()
{
	const htmlCode = htmlInput.value;
	const cssCode = `<style>${cssInput.value}</style>`;
	const completeCode = cssCode + htmlCode;

	outputFrame.innerHTML = completeCode;
}

function adjustTextareaHeight(textarea)
{
	textarea.style.height = 'auto';
	textarea.style.height = `${textarea.scrollHeight}px`;
}

htmlInput.addEventListener('keydown', (e) => {
	if(e.key === 'Tab')
	{
		e.preventDefault();

		const start = htmlInput.selectionStart;
		const end = htmlInput.selectionEnd;

		// 현재 위치에 탭 문자 삽입
		htmlInput.value = htmlInput.value.substring(0, start) + '\t' + htmlInput.value.substring(end);

		// 탭 삽입 후 커서 위치 조정
		htmlInput.selectionStart = htmlInput.selectionEnd = start + 1;
	}
});

cssInput.addEventListener('keydown', (e) => {
	if(e.key === 'Tab')
	{
		e.preventDefault();

		const start = cssInput.selectionStart;
		const end = cssInput.selectionEnd;

		// 현재 위치에 탭 문자 삽입
		cssInput.value = cssInput.value.substring(0, start) + '\t' + cssInput.value.substring(end);

		// 탭 삽입 후 커서 위치 조정
		cssInput.selectionStart = cssInput.selectionEnd = start + 1;
	}
});

htmlInput.addEventListener('input', () => {
	updateOutput();
	adjustTextareaHeight(htmlInput);
});

cssInput.addEventListener('input', () => {
	updateOutput();
	adjustTextareaHeight(cssInput);
});

