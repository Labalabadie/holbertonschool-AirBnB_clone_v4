$(document).ready(function () {
  const dic = {};
  const $amenitieschecker = $('input[type=checkbox]');
  const $checkedamenities = $('div.amenities h4');

  $amenitieschecker.click(function () {
    if ($(this).is(':checked')) {
	    dic[$(this).data('id')] = $(this).data('name');
	    $checkedamenities.text(Object.values(dic).join(', '));
    } else if ($(this).is(':not(:checked)')) {
	    delete dic[$(this).data('id')];
	    $checkedamenities.text(Object.values(dic).join(', '));
    }
  });
});
