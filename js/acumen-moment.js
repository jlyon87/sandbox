window.acumen = (function MomentDemo(acumen, m) {

	var enUSDateFormat = function(epochTimeStamp) {
		var d = new Date(epochTimeStamp);
		return epochTimeStamp ?
			m(d).tz("America/New_York").format("ddd, MMM Do, YYYY hh:mm a z") : "";
	};

	var enUSTimeFormat = function(epochTimeStamp) {
		var d = new Date(epochTimeStamp);
		return epochTimeStamp ?
			m(d).tz("America/New_York").format("ddd, MMM Do, YYYY hh:mm a z") : "";
	};

	var enUSDateTimeFormat = function(epochTimeStamp) {
		var d = new Date(epochTimeStamp);
		return epochTimeStamp ?
			m(d).tz("America/New_York").format("ddd, MMM Do, YYYY hh:mm a z") : "";
	};

	acumen.MomentDemo = {
		enUSDateFormat: enUSDateFormat,
		enUSTimeFormat: enUSTimeFormat,
		enUSDateTimeFormat: enUSDateTimeFormat
	};

	return acumen;

})(window.acumen || {}, window.moment);
