// CALCULATOR PROGRAM

// DOM이 준비된 다음에 전역 함수 바인딩
document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');

  // 숫자/기호 추가
  window.appendToDisplay = (input) => {
    display.value += input;
  };

  // C 버튼: 모두 지우기
  window.clearDisplay = () => {
    display.value = '';
  };

  // = 버튼: 계산
  window.calculate = () => {
    try {
      // 안전하게 평가
      const result = Function(`'use strict'; return (${display.value})`)();
      display.value = result;
    } catch {
      display.value = 'Error';
    }
  };
});

