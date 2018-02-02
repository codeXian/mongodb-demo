var db = connect("company");
var result = db.workmate.find();

result.forEach(function (result) {
  printjson(result);
})