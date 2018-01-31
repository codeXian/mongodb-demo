var userName = 'codexian';
var timeStamp = Date.parse(new Date());
var jsonDataBase = {"loginUnser": userName, "loginTime": timeStamp};
var db = connect('log');
db.login.insert(jsonDataBase);

print('demo log print success');