const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 8080
const cors = require('cors')
const app = express()

app.use(cors({
  origin: 'https://kopi34.ru'
}));
app.use(express.static(__dirname))
app.use(express.static(path.resolve(__dirname, 'build')))

// app.use((req, res, next) => {
//   res.set('Access-Control-Allow-Origin', 'https://kopi34.ru/');
//   // res.set('Content-Type', 'text/plain')
//   next();
// });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT)