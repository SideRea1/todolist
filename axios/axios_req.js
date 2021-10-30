const sendGetRequest = async () => {
    let response = await fetch('http://localhost:8080/user');

    if (response.ok) { // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа (см. про этот метод ниже)
        let json = await response.json();
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
};