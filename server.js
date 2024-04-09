// const express = require('express');
// const mongoose = require('mongoose');
// const ShortUrl = require('./models/shortUrl');
// const app = express();


// mongoose.connect('mongodb://localhost:27017/urlShortener', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//   console.log('MongoDB connected successfully');
// })
// .catch((error) => {
//   console.error('Error connecting to MongoDB:', error.message);
// });

// // Example of handling timeout error in database operation
// ShortUrl.find()
//   .then((shortUrls) => {
//     // Process fetched data
//   })
//   .catch((error) => {
//     console.error('Error fetching data from MongoDB:', error.message);
//   });


// // mongoose.connect('mongodb://localhost/urlShortener', {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true // Add this to address the deprecation warning
// // });

// app.set('view engine', 'ejs');
// app.use(express.urlencoded({ extended: false }));

// app.get('/', async (req, res) => {
//     try {
//         const shortUrls = await ShortUrl.find();
//         res.render('index', { shortUrls: shortUrls });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// app.post('/shortUrl', async (req, res) => { // Renamed the route to /shortUrl
//     try {
//         await ShortUrl.create({ full: req.body.full });
//         res.redirect('/');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// app.get('/:shortUrl', async (req, res) => {
//     try {
//         const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
//         if (!shortUrl) return res.sendStatus(404);

//         shortUrl.clicks++;
//         await shortUrl.save();

//         res.redirect(shortUrl.full);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// app.listen(process.env.PORT || 5000);

















const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require( './models/shortUrl' )
const app = express()

mongoose.connect('mongodb://localhost/urlShortener',{
    useNewUrlParser: true
})

app.set('view engine','ejs')
app.use(express.urlencoded({extended : false}))

app.get('/', async (req,res)=>{
    const shortUrls = await ShortUrl.find()
    res.render('index',{ shortUrls:shortUrls})
})

app.post('/shortUrls', async (req, res) => {
  await  ShortUrl.create({ full: req.body.FullUrl})

  res.redirect('/')
})

app.get('/:shortUrl', async(req, res)=>{
    const shortUrl = await ShortUrl.findOne({short: req.params.shortUrl })
    if(shortUrl == null) return res.sendStuatus(404)

    shortUrl.clicks++
    shortUrl.save()

    res.redirect(shortUrl.full)
});

app.listen(process.env.PORT || 5000);