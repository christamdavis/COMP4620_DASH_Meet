// source:https://codepen.io/gpelelis/pen/YWWWqv
var form_ele = '.form';

// make eveything disabled
var disableFormEdit = function(selector){
  $(selector).removeClass('form--enabled').addClass('form--disabled');
	$(selector + ' input, ' + selector + ' select, ' + selector + ' button').prop('disabled', true);
}


// make eveything enabled
var enableFormEdit = function(selector){
	$(selector + ' input, ' + selector + ' select, ' + selector + ' button ').prop('disabled', false);
  $(selector).removeClass('form--disabled').addClass('form--enabled');
}


disableFormEdit(form_ele);


$('.js-toggleForm').click(function(){
   // get the status of form
  var form_status = $(form_ele).hasClass('form--disabled') ? 'disabled' : 'enabled';

  // check if disabled or enabled
  switch (form_status){
    case 'disabled':
      enableFormEdit(form_ele);
      $(this).text('save')
      break;
    case 'enabled':
      disableFormEdit(form_ele);
      $(this).text('click to edit')
      break;
  }
});
