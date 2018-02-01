var db = connect('company');

var workmate3 = {
  name: 'hanmeimei',
  age: 30,
  sex: 0,
  job: 'UI高级设计师',
  skill: {
    skillOne: 'PhotoShop',
    skillTwo: 'UI',
    skillThree: 'Word+Excel+PPT'
  },
  regeditTime: new Date()
}

db.workmate.update({name: 'hanmeimei'}, workmate3);

print('[update]: The data was updated successfuly');