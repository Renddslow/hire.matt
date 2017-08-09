$(() => {
  $("a.internal").click((e) => {
    e.preventDefault();
    var location = $(e.target).attr("href").replace("/", "");
  });
});
