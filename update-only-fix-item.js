var workmate1 = {
  name: 'codexian',
  age: 18,
  sex: 1,
  job: 'front-end',
  skill: {
    skillOne: 'HTML+CSS',
    skillTwo: 'Javascript',
    skillThree: 'PHP'
  }
}

var workmate2 = {
  name: 'lilei',
  age: 30,
  sex: 1,
  job: 'JAVA后端',
  skill: {
    skillOne: 'HTML+CSS',
    skillTwo: 'J2EE',
    skillThree: 'PPT'
  },
  regeditTime: new Date()
}

var workmate3 = {
  name: 'hanmeimei',
  age: 20,
  sex: 0,
  job: 'UI设计',
  skill: {
    skillOne: 'PhotoShop',
    skillTwo: 'UI',
    skillThree: 'Word+Excel+PPT'
  },
  regeditTime: new Date()
}

var db = connect('company');
var workmateArray = [workmate1, workmate2, workmate3];
db.workmate.insert(workmateArray);
print('[SUCCESS]: The data was inserted successfuly');