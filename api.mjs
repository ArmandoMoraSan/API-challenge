import fetch from 'node-fetch';

const BASE_URL = "https://petstore.swagger.io/v2";

export async function createNewUser() {
    const userData = {
        id: 1,
        userName: "user1",
        firstName: "Carlos",
        lastName: "Romo",
        email: "carlosromo@gmail.com",
        password: "testing",
        phone: "603222022",
        userStatus: 100
    };

    const response = await fetch(`${BASE_URL}/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    });
    if (!response.ok) {
        throw new Error(`Failed to create user: ${response.statusText}`);
    }
    return await response.json();
}

export async function getUserByUserName(username) {
    const response = await fetch(`${BASE_URL}/user/${username}`);
    return await response.json();
}

export async function getPetsByStatus(status) {
    const response = await fetch(`${BASE_URL}/pet/findByStatus?status=${status}`);
    return await response.json()
}

export async function getSoldPets () {
    let listOfSoldPetss = await getPetsByStatus('sold');
    return listOfSoldPetss.map(pet => ({id: pet.id, name: pet.name}))
}



