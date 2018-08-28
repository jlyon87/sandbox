/*
	Acumen DateTimeFormatter IIFE
		Provided a valid date for the common JS Date Object,
		pretty print the date in a human readable format.

	@param epochTimeStamp, time stamp in milliseconds.
	@return formatted Date String
*/
// "2018-03-26T14:00:00.000+0000"
window.acumen = (function DateTimeFormatter(acumen) {
	var dateOptions = {
		weekday: "short",
		year: "numeric",
		month: "short",
		day: "numeric",
		timeZone: "America/New_York"
	};

	var timeOptions = {
		hour12: true,
		hour: "numeric",
		minute: "numeric",
		timeZone: "America/New_York",
		timeZoneName: "short"
	};

	var gmtDateTimeOptions = {
		weekday: "short",
		year: "numeric",
		month: "short",
		day: "numeric",
		hour12: true,
		hour: "numeric",
		minute: "numeric",
		timeZone: "Etc/GMT",
		timeZoneName: "short"
	};

	var dateTimeOptions = {
		weekday: "short",
		year: "numeric",
		month: "short",
		day: "numeric",
		hour12: true,
		hour: "numeric",
		minute: "numeric",
		timeZone: "America/New_York",
		timeZoneName: "short"
	};

	var enGMTZeroDateTimeFormat = function(epochTimeStamp) {
		var d = new Date(epochTimeStamp);
		return epochTimeStamp ? new Intl.DateTimeFormat("en-US", gmtDateTimeOptions).format(d) : "";
	};

	var enUSDateFormat = function(epochTimeStamp) {
		var d = new Date(epochTimeStamp);
		return epochTimeStamp ? new Intl.DateTimeFormat("en-US", dateOptions).format(d) : "";
	};

	var enUSTimeFormat = function(epochTimeStamp) {
		var d = new Date(epochTimeStamp);
		return epochTimeStamp ? new Intl.DateTimeFormat("en-US", timeOptions).format(d) : "";
	};

	var enUSDateTimeFormat = function(epochTimeStamp) {
		var d = new Date(epochTimeStamp);
		return epochTimeStamp ? new Intl.DateTimeFormat("en-US", dateTimeOptions).format(d) : "";
	};

	acumen.DateTimeFormatter = {
		enUSDateFormat: enUSDateFormat,
		enUSTimeFormat: enUSTimeFormat,
		enUSDateTimeFormat: enUSDateTimeFormat,
		enGMTZeroDateTimeFormat: enGMTZeroDateTimeFormat
	};

	return acumen;

})(window.acumen || {});
