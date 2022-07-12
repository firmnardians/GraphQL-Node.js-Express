const { buildSchema } = require('graphql');

const schemaApp = buildSchema(`
    type Users {
        id: Int
        name: String
        club_id: Int,
        club: Clubs
    }
    type Clubs {
        id: Int
        club_name: String
        players: [Users]
    }
    type Query {
        message: String
        clubs: [Clubs]
        users: [Users]
        findClub(id: Int): Clubs
        findUser(id: Int): Users
    }
`);

module.exports = schemaApp;
