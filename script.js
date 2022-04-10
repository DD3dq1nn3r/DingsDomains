


function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username == 'Henry' && password == '09102008') {
        window.location.href = 'website.html';
    } else {
        alert('Passwort falsch!');
    }

}

