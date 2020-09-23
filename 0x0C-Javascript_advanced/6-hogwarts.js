let studentHogwarts = (function() {
    let privateScore = 0;
    let name = null;

    // private method
    let changeScoreBy = function(points) {
	privateScore += points;
    }

    let setName = function(newName) {
	name = newName;
    }

    let rewardStudent = function() {
	changeScoreBy(1);
    }

    let penalizeStudent = function() {
	changeScoreBy(-1);
    }

    let getScore = function() {
	return `${name}: ${privateScore}`;
    }

    return {
	setName: setName,
	rewardStudent: rewardStudent,
	penalizeStudent: penalizeStudent,
	getScore: getScore
    }
});


let harry = studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

let draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
