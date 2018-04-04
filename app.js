// https://github.com/iamshaunjp/graphql-playlist

const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://allen:1stMlerber@ds227119.mlab.com:27119/graphql-list');
mongoose.connection.once('open',()=>{

    mongoose.connection.db.listCollections().toArray(function(err, names) {
        if (err) {
            console.log(err);
        } else {
            console.log(names);
        }
    })
    console.log('connected to database');
});

// bind express with graphql
/**
 *   This is the GraphQL schema. Mongoose has it's own schema.
 */
app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
