const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    //Logic..
    searchInputEl.focus();
});
// 인풋 요소의 대한 코드
searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});                    //      html의 속성, 그 속성의 문자데이터
// set 무엇인가 지정한다
// Attribute 어트리뷰트 는 html문서의 속성을 Attribute라고 부른다!!
// 결국 서치인풋엘리먼트 부분에 어떤 html의 속성을 지정할 때 
//   사용하는 메소드 .setAttribute 이다

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});  


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); 