const getTasks = async () => {
    let response = await fetch('http://localhost:8080/api/task');

    if (response.ok) { // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа (см. про этот метод ниже)
        let json = await response.json();
        console.log(json);
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    } 

};

const removeTask = async () => {
    fetch('http://localhost:8080/api/task/:id', {
  method: 'DELETE',
})
.then(res => res.text()) // or res.json()
.then(res => console.log(res))
};


const addTask = async (value) => {
    fetch('http://localhost:8080/api/task', {

  method: 'POST', body: JSON.stringify({task: value}), 
  headers: {
    'Content-Type': 'application/json'
  }

})
};

