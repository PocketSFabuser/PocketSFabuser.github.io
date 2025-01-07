const Login = document.getElementById('login');
            const pass = document.getElementById('password');
            const contin = document.getElementById('continue');
            contin.addEventListener('click', () => {
                if (pass.value == 'Admin' && Login.value == 'Admin') {
                window.location.href = 'main.html';
                } else {
                    contin.textContent = 'Incorrect, try again';
                    console.error ('Incorrect');
                    return;
                }
                
            });