$(() => {
	$(".form-group input").focus(focusLabel);
	$(".form-group input").focusout(removeFocus);
});

const focusLabel = (e) => {
	$(e.target).parent().find("label").addClass("active focus");
};

const removeFocus = (e) => {
	if ($(e.target).val().length) {
		$(e.target).parent().find("label").removeClass("active");
	} else {
		$(e.target).parent().find("label").removeClass("active");
		$(e.target).parent().find("label").removeClass("focus");
	}
}
