$(() => {
	window.onpopstate = () => {
		handleDirectNavigation(window.location.href);
	};
	handleDirectNavigation(window.location.href);

  $("a.internal").click((e) => {
    e.preventDefault();
    let route = $(e.target).attr("href").replace("/", "");
		if (route) {
			window.history.pushState(null, null, `/${route}`);
			doRouteAction(route);
		} else {
			window.history.pushState(null, null, '/');
			doRouteAction("home");
		}
  });
});

const routes = [
	"home",
	"work",
	"contact"
];

const doRouteAction = (route) => {
	switch(route) {
		case "home":
			$(".home").show();
			hideRoutesExcluding("home", routes);
			break;
		case "work":
			$(".work").show();
			hideRoutesExcluding("work", routes);
			break;
		case "contact":
			$(".contact").show();
			hideRoutesExcluding("contact", routes);
			break;
	}
};

const hideRoutesExcluding = (route, availableRoutes) => {
	for (var i = 0; i < availableRoutes.length; i++) {
		if (availableRoutes[i] === route) {
			continue;
		}
		$(`.${availableRoutes[i]}`).hide();
	}
};

const handleDirectNavigation = (location) => {
	var currentLocation = location.replace("://", "").split("/");
	if (currentLocation[currentLocation.length - 1]) {
		doRouteAction(currentLocation[currentLocation.length - 1]);
	} else {
		doRouteAction("home");
	}
};
