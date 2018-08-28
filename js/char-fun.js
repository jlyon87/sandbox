const rdb = require("rethinkdb");
const config = {
	host: "localhost",
	port: 28015,
	db: "dev_companion"
};

const userId = "09262a6b-bdaa-4193-bbcc-445454255baf";

const character = {
	userId: "09262a6b-bdaa-4193-bbcc-445454255baf",
	createdDate: new Date(),
	id: 92985127,
	name: "Gib McCrory",
	corporationId: 1785936510,
	birthday: "2013-02-10T03:05:50Z",
	gender: "male",
	raceId: 8,
	bloodlineId: 7,
	description: "",
	allianceId: 473668485,
	ancestryId: 14,
	securityStatus: 5.004396245029444,
	oauth: {
		accessToken: "abc",
		refreshToken: "123",
		expiresOn: new Date(Date.now() + 1200 * 1000)
	}
};

rdb.connect(config)
.then(conn => {
	const Characters = require("./character-model")(rdb, conn);
	Characters.insertCharacter(character)
	.then(() => Characters.getCharactersByUserId(userId))
	.then(result => {
		console.log("result", result);
	})
	.then(() => {
		conn.close();
	});
})
.catch(err => console.error("Error connecting to rdb.", err.message));
