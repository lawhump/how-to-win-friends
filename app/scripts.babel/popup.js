'use strict';


window.onload = function() {
  console.log(index);
  showAdvice();
};

document.addEventListener('DOMContentLoaded', function () {
  $('.previous').addEventListener('click', prevAdvice);
  $('.next').addEventListener('click', nextAdvice);
});
