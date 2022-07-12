const arrayClub = require('../db/club.json');
const arrayUser = require('../db/user.json');

/**
 * A function to find user
 * @param {number} userId user id
 */
function findUser(userId) {
	const __findUser = arrayUser.find((user) => user.id === userId);
	const __findClub = arrayClub.find((club) => club.id === __findUser.club_id);

	return { ...__findUser, club: __findClub };
}

/**
 * A function to find club
 * @param {number} clubId club id
 */
function findClub(clubId) {
	const __findClub = arrayClub.find((club) => club.id === clubId);
	const __filterUser = arrayUser.filter((user) => user.club_id === __findClub.id);

	return { ...__findClub, players: __filterUser };
}

module.exports = { findUser, findClub };
