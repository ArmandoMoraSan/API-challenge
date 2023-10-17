export class PetAnalyzer {
    constructor(pets) {
        this.pets = pets;
    }

    countPetNames() {
        const nameCounts = {};

        for (const pet of this.pets) {
            if (nameCounts[pet.name]) {
                nameCounts[pet.name]++;
            } else {
                nameCounts[pet.name] = 1;
            }
        }
        return nameCounts;
    }
}