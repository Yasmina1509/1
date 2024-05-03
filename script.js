
    function weeklydays() {
    let number = parseInt(prompt("Введите число от 1 до 7, где 1 это понедельник, а 7 это воскресенье:"));
    
    switch (number) {
        case 1:
            alert('Понедельник - рабочий день');
            break;
        case 2:
            alert('Вторник - рабочий день');
            break;
        case 3:
            alert('Среда - рабочий день');
            break;
        case 4:
            alert('Четверг - рабочий день');
            break;
        case 5:
            alert('Пятница - рабочий день');
            break;
        case 6:
            alert('Суббота - выходной день');
            break;
        case 7:
            alert('Воскресенье - выходной день');
            break;
        default:
            alert('Некорректный ввод. Введите число от 1 до 7.');
    }
}

weeklydays();
console.log=number 