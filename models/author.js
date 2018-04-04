/**
 *   Mongoose Models
 *   https://youtu.be/sRVPlCCzkww?t=54
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: String,
    age: Number
    /** MLab will create the ID for [author] and [book] */
});

/** A 'Model' == 'Collection' in MongoDB 
 * 
 *   The MLab collection should be 'Author'
*/
module.exports = mongoose.model('Author', authorSchema);