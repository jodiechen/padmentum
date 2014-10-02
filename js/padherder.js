jQuery(document).ready(function($) {
	padHerder();
});
function padHerder() {
    setTimeout(padHerder,1000000);
	var query = "https://www.padherder.com/api/events/";
	console.log(query)
	getData(query);
}
function getData(query) {
	$.getJSON(query).done(function(parsed_json) {
		for (var x=0; x< parsed_json.keys; x++) {
			console.log(x + "hello");
		}
		console.log(parsed_json);});
	
}