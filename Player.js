class Player {
    name;
    #sex;
    birthDate;
    age;
    ranking;

    constructor(name, ranking = 0, sex = 'Female', birthDate = undefined) {
        this.name = name;
        this.ranking = ranking;
        if (birthDate) {
            let [d, m, y] = birthDate.split('/');
            if (!isNaN(new Date(y, m - 1, d))) {
                this.birthDate = birthDate;
            }
        }
        //this.birthDate = birthDate;
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
        return this.#sex;
    }

    ageCalculator() {
        if (!this.birthDate) return undefined;
        let now = new Date();
        let birth = new Date(this.birthDate);
        let age = now.getFullYear() - birth.getFullYear();
        let difmeses = now.getMonth() - birth.getMonth();

        if (difmeses < 0 || (difmeses === 0 && now.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    }

    get age() {
        return this.age;
    }

    get category() {
        if (this.age <= 12) return 'Benjamin';
        if (this.age <= 15) return 'Cadet';
        if (this.age <= 19) return 'Junior';
        return 'Senior';
    }
}


let player1 = new Player('David', 1, 'Male', '01/05/1990')

console.log(player1)



module.exports = Player;
//PRUEBAS (ELIMINAR A PARTIR DE AQUI)

//let player1 = new Player('David')
//console.log(player1)