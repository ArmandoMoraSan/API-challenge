import * as api from './api.mjs';
import { PetAnalyzer } from './petAnalyzer.mjs';
import fs from 'fs/promises';

(async () => {
    const soldPets = await api.getSoldPets();
    const analyzer = new PetAnalyzer(soldPets);
    const nameCounts = analyzer.countPetNames();
    const jsonContent = JSON.stringify(nameCounts, null, 2);
    await fs.writeFile('./petsNamesCount.json', jsonContent);
    console.log(nameCounts); 
})();

(async () => {
    await api.createNewUser();
    const user = await api.getUserByUserName('user1');
    const jsonContent = JSON.stringify(user, null, 2)
    await fs.writeFile('./userData.json', jsonContent);
    console.log(user); 
})();