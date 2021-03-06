$(() => {

	$.getJSON("/public/work.json", (json) => {
		for (var i = 0; i < json.work.length; i++) {
			let args = {
				imageURI: json.work[i].image,
				link: json.work[i].href,
				role: json.work[i].role,
				status: json.work[i].status.label,
				statusColor: json.work[i].status.color,
				title: json.work[i].title,
				description: json.work[i].description,
				projectYear: json.work[i].year,
				index: i
			};

			let html = $("#portfolio").html().trim();
			for (var arg in args) {
				html = replaceAll(html, `{{ ${arg} }}`, args[arg]);
			}
			$(".portfolio-container").append($(html));
		}
		$("#loading").hide();
	});
});


const replaceAll = (string, sub, replace) => {
	return string.split(sub).join(replace);
};

const clickHandler = (target) => {
	var id = $(target).attr("bound-to");
	$(`#${id}`).show();
}

const hideModal = (target) => {
	$(target).hide();
}
