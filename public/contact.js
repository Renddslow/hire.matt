$(() => {
	$(".form-group input").focus(focusLabel);
	$(".form-group input").focusout(removeFocus);
	$(".form-group textarea").focus(focusLabel);
	$(".form-group textarea").focusout(removeFocus);
});

const focusLabel = (e) => {
	$(e.target).parent().find("label").addClass("active focus");
};

const removeFocus = (e) => {
	if ($(e.target).val().length) {
		$(e.target).parent().find("label").removeClass("focus");
	} else {
		$(e.target).parent().find("label").removeClass("active");
		$(e.target).parent().find("label").removeClass("focus");
	}
}
