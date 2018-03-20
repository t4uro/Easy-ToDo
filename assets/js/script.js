$('ul').on('click', 'li', function() {
	$(this).toggleClass('done');
})

$('ul').on('click', 'span', function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	})
	event.stopPropagation();
})

$('input').on('keypress', function(event) {
	if (event.which === 13) {
		$('ul').append('<li><span><i class="fas fa-trash-alt"></i></span>' + $(this).val() + '</li>');
		$(this).val('');
	}
}) 

$('#toggle-icon').on('click', function() {
	$('input').fadeToggle();
})