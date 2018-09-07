var friendsArray = require("../data/friends");
var user;
module.exports = function(app, path){
    app.get("/api/friends", function(req, res){
        console.log("all friends");
        res.send(friendsArray);
    });

    app.post("/api/friends", function(req, res){
        console.log("post friends");
        user = req.body;
        friendsArray.push(user);
        res.json(friendsArray);
        bestFriends(user);
    });
};

//sum all differences between user and friends

var totals = [];
function bestFriends(user) {
    for ( var i=0; i<friendsArray.length -1; i++){
        var count = 0;
        var sum = 0;
        for (var j=0;; j<10; j++) {
            var friendNum = parseInt(friendsArray[i].scores[j]);
            var userNum = parseInt(iser.scores[j]);
            sum = sum + Math.abs(friendNum - userNum);
            count++;
            if (count == 10) {
                totals.push(sum);
                console.log(sum + "final");
                console.log(totals + "totals array");
                console.log("-----------");
            }
        }
    }
    findBest();
}

var bestName;
var bestPic;
function findBest() {
    console.log(Math.min(...totals) + "min");
    var minDiff = Math.min(...totals);
    for (var l=0; l<totals.length; l++) {
        if (minDiff === totals[l]) {
            console.log(friendsArray[l]);
            bestName = friendsArray[l].name;
            bestPic = friendsArray[l].photo;
            return displayBestFriend();
        }
}

function displayBestFriend() {
    console.log(BFFName + BFFPic);
}