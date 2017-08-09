$(() => {
	$(".form-group input").focus(focusLabel);
	$(".form-group input").focusout(removeFocus);
	$(".form-group textarea").focus(focusLabel);
	$(".form-group textarea").focusout(removeFocus);

	$("form").submit((e) => {
		e.preventDefault();
		var data = {
			name: $("#name").val().trim(),
			email: $("#email").val().trim(),
			message: $("#description").val().trim()
		};
		handleForm(data, displaySuccess, displayError);
		return false;
	})
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
};

const handleForm = (data, cb, err) => {
	$.ajax({
		type: 'POST',
		data: data,
		url: 'http://api.mattmcelwee.com/v1/contact',
		success: (res) => {
			displaySuccess();
		},
		error: (res) => {
			console.log(res);
			displayError();
		}
	});
};

const displaySuccess = () => {
	$("form").remove();
	$(".contact").append($("<p>Awesome! I'll take a look at your message as soon as I can. I'm so looking forward to talk with you more.</p>"));
}

const displayError = () => {
	$("form").remove();
	let emailAcc = "mubatt";
	let emailDomain = "wyopub.com";
	$(".contact").append($(`<p><strong>Whoops!</strong></p><p>Looks like there was an issue submitting the form. Well I don't usually do this for just anyone, but since I like you, how 'bout you just <a href="mailto:${emailAcc}@${emailDomain}">send me an email.</a>`));
}
