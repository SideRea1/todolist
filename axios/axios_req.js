const getTasks = async () => {
    let response = await fetch('http://localhost:8080/api/user');

    if (response.ok) { // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа (см. про этот метод ниже)
        let json = await response.json();
        console.log(json);
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
};

const removeTask = async () => {
    fetch('http://localhost:8080/api/user/:id', {
  method: 'DELETE',
})
.then(res => res.text()) // or res.json()
.then(res => console.log(res))
};


const addTask = async (value) => {
    fetch('http://localhost:8080/api/user', {
  method: 'POST', body: {task: value}
})
};

