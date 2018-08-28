const creds = {
	username: "jml@mybox.com",
	password: "4Xsy61!k7D7kgeYwupX6YOt",
	token: "uuLS0Bw59RP7t1Xjp4pJOMDn2",
	loginUrl: "https://login.salesforce.com"
};
const jsforce = require("jsforce");

const conn = new jsforce.Connection({
	loginUrl: creds.loginUrl
});

const logout = conn => {
	conn.logout((err) => {
		if(err) {
			console.error(err.message);
		}
	});
}

conn.login(creds.username, creds.password + creds.token, (err, userInfo) => {
	if(err) return console.error(err);

	console.log(conn.accessToken);
	console.log(conn.instanceUrl);

	console.log("UserInfo", userInfo);

	conn.query("SELECT Name, Id FROM Account LIMIT 10", (err, result) => {
		if(err) return console.error(err);

		console.log("result: ", JSON.stringify(result, null, 2));

		logout(conn);
	});
});
