$(() => {
	$(".form-group input").focus(focusLabel);
});

const focusLabel = (e) => {
	$(e.target).parent().find("label").addClass("active focus");
};
