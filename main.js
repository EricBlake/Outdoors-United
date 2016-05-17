$('.tab').click(function(){
  $('.tab').removeClass('active');
  $(this).addClass('active');
  
  $('.tab-content').removeClass('active');
  
  var toggleId = $(this).attr('data-ui');
  
  console.log(toggleId);
  
  $('#' + toggleId).addClass('active');
 
   
});



$('.toggle').click(function(){
  
   if($('.menu-content').hasClass('active')){
     $('.menu-content').removeClass('active');
   }
  
   else {
     $('.menu-content').addClass('active');
   }  
  
  $('.menu-content').toggleClass('active');
  
  $('.menu-content').slideToggle(1000);
});


$(function(){
    var $select = $(".1-100");
    for (i=1;i<=100;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
});


$('.toggle').click(function(){
  $('.content').slideToggle(900);
});

if ( $('#test')[0].type != 'date' ) $('#test').datepicker();