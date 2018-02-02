// 普通查询

var startTime = new Date().getTime();
var db = connect("company");
var rs = db.randomInfo.find({username: 'lmgvdnw', randNum0: 857430}).hint({randNum0: 1});
rs.forEach(rs => {printjson(rs)});
var runTime = new Date().getTime() - startTime;
print('[SUCCESS] This run time is:' + runTime + 'ms');

