function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}
function increaseRankBy(n) {  
  let inc=document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i=0, i<inc.length; i++) {
    inc[i].innerHtml=
  }
  
}