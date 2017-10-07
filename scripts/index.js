<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js"></script>
<script>
	$(document).ready(function() {

		$('#back-to-top').each(function() {
			$(this).click(function() {
				$('html,body').animate({
					scrollTop: 0
				}, 'slow');
				return false;
			});
		});

	});
</script>
