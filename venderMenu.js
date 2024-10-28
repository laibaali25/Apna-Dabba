document.getElementById("addMoreButton").addEventListener("click", function(){
  var mainContainer = document.getElementById("mainContainer");
  var clonedContainer = mainContainer.cloneNode(true);

  var inputs = clonedContainer.querySelectorAll('input');
  inputs.forEach(function(input){
    input.value = '';
  });
  document.body.insertBefore(clonedContainer, document.getElementById("addMoreButton"));
});
