const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

// --- NINJA --------------------------
app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
// ------------------------------------

// --- LYNDA --------------------------
// app.get('/', (req, res) => {
//     res.send('GraphQL is amazing!');
// });

// app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));
// ------------------------------------
