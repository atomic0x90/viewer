// 현재 페이지의 URL 경로를 가져옴
const currentPage = window.location.pathname.split('/').pop();

// 모든 버튼을 반복하면서 데이터 속성에 지정된 페이지와 현재 페이지를 비교
document.querySelectorAll('.navbar .btn').forEach(button => {

	if(button.getAttribute('data-page') === currentPage)
	{
		button.classList.add('active');
	}
});

