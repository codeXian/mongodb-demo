var db = connect('company');

// db.workmate.update({sex: 1}, {$set: {hasGirl: true}}, false, true);

// var resultMessage = db.runCommand({getLastError: 1})

var myModify = {
  findAndModify: 'workmate',
  query: {name: 'codexian'},
  update: {$set: {age: 2000}},
  new: true
}

var resultMessage = db.runCommand(myModify);
printjson(resultMessage);