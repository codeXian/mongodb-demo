var db = connect('company');

// db.workmate.update({"name": "hanmeimei"}, {"$set": {sex: 2, age: 60}});
// db.workmate.update({"name": "hanmeimei"}, {"$set": {"skill.skillThree": 'word'}})
// db.workmate.update({"name": "hanmeimei"}, {"$unset": {"age": ""}})
// db.workmate.update({"name": "hanmeimei"}, {"$inc": {"age": -2}})
// db.workmate.update({}, {$set: {interset: []}}, {multi: true});
db.workmate.update({name: 'xiaoWang'}, {"$set": {age: 20}}, {upsert: true})

print('[update] hanmeimei with set');