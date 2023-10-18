import * as api from './modules/api.js';
import { PetAnalyzer } from './modules/petAnalyzer.js';
import fs from 'fs/promises';

(async () => {
    const soldPets = await api.getSoldPets();
    const analyzer = new PetAnalyzer(soldPets);
    const nameCounts = analyzer.countPetNames();
    const jsonContent = JSON.stringify(nameCounts, null, 2);
    await fs.writeFile('./data/petsNamesCount.json', jsonContent);
    console.log(nameCounts); 
})();

(async () => {
    await api.createNewUser();
    const user = await api.getUserByUserName('user1');
    const jsonContent = JSON.stringify(user, null, 2)
    await fs.writeFile('./data/userData.json', jsonContent);
    console.log(user); 
})();