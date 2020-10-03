const express = require('express');
const app = express();
const newsRouter = require('./routers/news');

app.use(express.static('public'));
app.use(express.static('data/uploads'));
app.use('/api', newsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}.`);
});
