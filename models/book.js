/**
 *   Mongoose Models
 *   https://youtu.be/sRVPlCCzkww?t=54
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: String,
    genre: String,
    authorId: String
    /** MLab will create the ID for [author] and [book] */
});

/** A 'Model' == 'Collection' in MongoDB 
 * 
 *   The MLab collection should be 'Book'
*/
module.exports = mongoose.model('Book', bookSchema);