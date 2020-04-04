var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
    console.log(friends);
  });

  app.post("/api/friends", function(req, res) {
    friends.push(req.body);
    console.log(req.body);
    res.json(req.body);
   
    for (let i = 0; i < (friends.length - 1); i++) {
      friendScores.addScore(friends[i].scores); 
      console.log(friends[i].scores);
      compare(req.body.scores, friends[i].scores);
      
    }
    console.log("This is friendScores :" + friendScores);

    function compare(a, b) {
      for(j=0;  j < 10; j++) {
        var sum = Math.abs(a[j] - b[j]);
        console.log("This is sum: " + sum);
      }
    }
  });
}
