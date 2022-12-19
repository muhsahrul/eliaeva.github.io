const menuTogle = document.querySelector('.menu_list');
const nav = document.querySelector('.off');

menuTogle.addEventListener('click', function() {
  if (!nav.classList.contains('show')) {
    return (
      nav.classList.remove('off'),
      nav.classList.add('show')
    );
  } else {
    return(
      nav.classList.remove('show'),
      nav.classList.add('off')
    );
  }
});

// $(document).ready(function(){
//   $("a").on('click', function(event) {
//     if (this.hash !== "") {
//       event.preventDefault();
//       var hash = this.hash;
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){
//         window.location.hash = hash;
//       });
//     }
//   });
// });