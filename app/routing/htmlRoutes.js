//basic routes for home and for survey pages

//NEED TO ADD IF/ELSE STATEMENT


app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../home.html"))
});

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "survey.html"))
})