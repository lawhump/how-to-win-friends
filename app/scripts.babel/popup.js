'use strict';


window.onload = showAdvice();

document.addEventListener('DOMContentLoaded', function () {
  $('.previous').addEventListener('click', prevAdvice);
  $('.next').addEventListener('click', nextAdvice);
});
