// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener( 'deviceready', function() {
		$('#btnbeep').tap(function () {
			navigator.notification.beep(25); 
			});
		$('#btnvibrar').on('tap',function() {
			navigator.notification.vibrate(2000);
    });
  });
});

