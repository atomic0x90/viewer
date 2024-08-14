marked.setOptions({
	breaks: true, // 줄바꿈을 <br>로 처리
	gfm: true,    // GitHub Flavored Markdown 지원
	tables: true  // 테이블 지원
});

const markdownInput = document.getElementById('markdown');
const htmlOutput = document.getElementById('html-output');

function updateMarkdown()
{
	const markdownText = markdownInput.value.replace(/\t/g, '    ');
	htmlOutput.innerHTML = marked.parse(markdownText);
}

function adjustTextareaHeight()
{
	markdownInput.style.height = 'auto'; // 높이를 초기화
	markdownInput.style.height = `${markdownInput.scrollHeight}px`; // 내용에 맞게 높이 조정
}

markdownInput.addEventListener('keydown', (e) => {
	if(e.key === 'Tab')
	{
		e.preventDefault();

		const start = markdownInput.selectionStart;
		const end = markdownInput.selectionEnd;

		// 현재 위치에 탭 문자 삽입
		markdownInput.value = markdownInput.value.substring(0, start) + '\t' + markdownInput.value.substring(end);

		// 탭 삽입 후 커서 위치 조정
		markdownInput.selectionStart = markdownInput.selectionEnd = start + 1;
	}
});

markdownInput.addEventListener('input', () => {
	updateMarkdown();
	adjustTextareaHeight();
});
