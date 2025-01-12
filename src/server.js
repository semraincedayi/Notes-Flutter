const express=require('express');
const app=express();

const mongoose= require('mongoose');
const Note=require('./models/Note');

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
mongoose.connect("mongodb+srv://incedayisemra35:41292@cluster0.w0yok.mongodb.net/Cluster0").then(function () {
    
    app.get("/", function (req,res) {
        const response={statuscode:res.statusCode, message: "API works!"};
        res.json(response);
    });  
    const noteRouter=require('./routes/Note');
    app.use("/notes",noteRouter);
});
const PORT=process.env.PORT || 5000;
app.listen(PORT,function(){
    console.log("server started at PORT:"+PORT);

});
