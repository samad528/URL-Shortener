const mongoose = require('mongoose');
const shortId = require('shortid');

// Define the schema for ShortUrl
const shortUrlSchema = new mongoose.Schema({
    // Full URL submitted by the user
    full: {
        type: String,
        required: true
    },
    // Shortened URL generated using shortid
    short: {
        type: String,
        required: true,
        default: shortId.generate
    },
    // Number of clicks on the shortened URL
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
});

// Export the ShortUrl model based on the schema
module.exports = mongoose.model('ShortUrl', shortUrlSchema);
























// const mongoose = require('mongoose')
// const shortId = require('shortid')


// const shortUrlSchema = new mongoose.Schema({
// full: {
//     type:String,
//     required: true
// },
// short: {
//     type: String,
//     required: true,
//     default: shortId.generate
// },
// clicks: {
//     type: Number,
//     required: true,
//     default: 0
// }
// })

// module.exports = mongoose.model('ShortUrl',shortUrlSchema)
