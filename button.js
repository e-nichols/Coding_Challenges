function createShit(){

    for (var i = 0; i < 5; i++) {
      var btn = document.createElement('button');
      btn.appendChild(document.createTextNode('Button ' + i));
      btn.addEventListener('click', (function(i) {
        return function() { console.log(i); };
      })(i));
      document.body.appendChild(btn);
    }
}
createShit();
