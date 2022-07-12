const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { findClub, findUser } = require('./app');
const arrayUsers = require('./db/user.json');
const schemaApp = require('./schema/schema');
const arrayClub = require('./db/club.json');

const app = express();
const port = 3000;

const schema = schemaApp;

const rootValue = {
	message: () => {
		return 'Hai. Welcome to Football Club';
	},
	clubs: () => arrayClub,
	users: () => arrayUsers,
	findClub: ({ id }) => findClub(id),
	findUser: ({ id }) => findUser(id),
};

app.get('/', (req, res) => {
	const result = {
		message: 'Graphql with node.js',
	};

	res.json(result);
});

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		rootValue,
		graphiql: true,
	})
);

app.listen(port, () => {
	console.log('Server running on http://localhost:3000');
});
