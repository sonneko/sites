fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        const user = data.results[0];
        const userCard = createUserCard(user);
        document.getElementById('userCards').appendChild(userCard);
    })
    .catch(error => console.error('Error fetching user data:', error));

function createUserCard(user) {
    const card = document.createElement('div');
    card.classList.add('card');

    const avatar = document.createElement('img');
    avatar.classList.add('avatar');
    avatar.src = user.picture.large;
    card.appendChild(avatar);

    const name = document.createElement('div');
    name.textContent = `${user.name.first} ${user.name.last}`;
    card.appendChild(name);

    const email = document.createElement('div');
    email.textContent = user.email;
    card.appendChild(email);
    return card;
}