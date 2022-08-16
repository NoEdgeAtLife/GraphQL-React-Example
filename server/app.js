const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());

mongoose.connect('mongodb://localhost:27017/graphql-book-app', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongoDB');
}).on('error', (error) => {
    console.log(error);
}).on('disconnected', () => {
    console.log('disconnected from mongoDB');
}).on('close', () => {
    console.log('close from mongoDB');
}).on('reconnected', () => {
    console.log('reconnected from mongoDB');
}).on('reconnectFailed', () => {
    console.log('reconnectFailed from mongoDB');
}).on('reconnecting', () => {
    console.log('reconnecting from mongoDB');
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}) );

app.listen(4000, () => {
  console.log('listening on port 4000');
});