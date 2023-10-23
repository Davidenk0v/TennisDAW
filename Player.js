class Player {
    name;
    sex;
    birthDate;
    #age;
    ranking;

    constructor(name, ranking) {
        this.name = name;
        this.birthDate = birthDate;
        this.sex = this.validateSex(sex);
        this.age = this.ageCalculator()
    }

    validateSex(sex) {
        if (sex.toLowerCase() === 'male') {
            return 'Male';
        } else {
            return 'Female';
        }
    }

    get Sex() {
        return this.sex;
    }

    ageCalculator() {
        let now = new Date();
        let birth = new Date(this.birthDate);
        let age = now.getFullYear() - birth.getFullYear();
        let difmeses = now.getMonth() - birth.getMonth();

        if (difmeses < 0 || (difmeses === 0 && now.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    }

    getAge() {
        return this.age;
    }

    getCategory() {
        if (this.age < 12) {
            return 'Benjamin';
        } else if (this.age > 12 && this.age < 16) {
            return 'Cadet'
        } else if (this.age > 15 && this.age < 20) {
            return 'Junior'
        } else {
            return 'Senior'
        }
    }
}


let player1 = new Player('David', 'hamburguesa', '01-05-1990')

console.log(player1)
console.log(player1.getCategory())


module.exports = Player;
//PRUEBAS (ELIMINAR A PARTIR DE AQUI)

//let player1 = new Player('David')
//console.log(player1)