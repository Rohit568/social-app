const express = require('express');
const app =express();
const PORT = 8000;
app.use('/', require('./routes/index'));

app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(PORT, function(err){
    if(err)
      console.log("Error in running in  server : ${err}");
    console.log('Server is running on port : ${PORT}');
});