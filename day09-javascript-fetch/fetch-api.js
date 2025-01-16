const button = document.getElementById('loadUser');
const userInfo = document.getElementById('userInfo');

button.addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
    .then(Response => Response.json())
    .then(data => {
        const user = data.results[0];
        userInfo.innerHTML = `
        <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
        <p><strong>Email:</strong>${user.email}</p>
        <img src="${user.picture.medium}" alt="User Picture">
        `;
    })
    .catch(error => {
        userInfo.innerHTML = `<p>Error loading user infomation.<p>`;
        console.error(error);
    })
})