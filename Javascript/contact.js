const textarea = document.querySelector('.text-area')

textarea.addEventListener("input", function() {
  this.value = this.value.replace(/\\n/g, "\n");
});