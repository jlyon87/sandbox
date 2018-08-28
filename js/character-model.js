module.exports = (rDB, conn) => {
	const characters = rDB.table("characters");

	const getCharacterById = id => {
		return characters
			.get(id)
			.run(conn);
	};

	const getCharactersByUserId = (userId) => {
		return characters
			.filter({ userId })
			.run(conn)
			.then(cursor => cursor.toArray());
	};

	const insertCharacter = (character) => {
		character.createdDate = new Date();
		return characters
			.insert(character)
			.run(conn);
	};

	const updateCharacterById = (characterId, character) => {
		return characters
			.get(characterId)
			.update(character)
			.run(conn)
	};

	const deleteCharacterById = (characterId) => {
		return characters
			.get(characterId)
			.delete()
			.run(conn)
			.then(res => {
				return res.deleted === 1 && res.errors === 0;
			});
	};

	return {
		getCharacterById,
		getCharactersByUserId,
		insertCharacter,
		updateCharacterById,
		deleteCharacterById
	};
};
