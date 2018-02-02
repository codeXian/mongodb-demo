var db = connect('company');

// db.workmate.update({"name": "hanmeimei"}, {"$set": {sex: 2, age: 60}});
// db.workmate.update({"name": "hanmeimei"}, {"$set": {"skill.skillThree": 'word'}})
// db.workmate.update({"name": "hanmeimei"}, {"$unset": {"age": ""}})
// db.workmate.update({"name": "hanmeimei"}, {"$inc": {"age": -2}})
// db.workmate.update({}, {$set: {interset: []}}, {multi: true});
// db.workmate.update({name: 'xiaoWang'}, {"$set": {age: 20}}, {upsert: true})
// db.workmate.update({name: 'xiaoWang'}, {$push: {interest: 'draw'}})
// db.workmate.update({name: 'codexian'}, {$push: {'skill.skillFour': 'draw'}})
// db.workmate.update({name: 'xiaoWang', 'interest': {$ne: 'playGame'}}, {$push: {interest: 'Game'}})
// db.workmate.update({name: 'xiaoWang'}, {$addToSet: {interest: 'readBook'}})

// var newInterset = ['Sing', 'Dance', 'Code'];
// db.workmate.update({name: 'xiaoWang'}, {$addToSet: {interest: {$each: newInterset}}})

// db.workmate.update({name: 'xiaoWang'}, {$pop: {interest: 1}})
db.workmate.update({name: 'xiaoWang'}, {$set: {'interest.2': 'Code'}})

print('[update] hanmeimei with set');