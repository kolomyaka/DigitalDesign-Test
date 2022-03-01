// Разработка функции, которая принимает дату и возвращает нам ответ в виде

// <День недели>,<номер недели>неделя, <месяц><год>года

const getDayInfo = (date) => {

    let options = {
        year: 'numeric',
        weekday : 'long',
        month: 'long',
        day: 'numeric',
    }

    let info = date.split('.')
    console.log(info);
    [info[0], info[1]] = [info[1], info[0]];
    console.log(info);
    let currentDate = new Date(info).toLocaleString('ru', options);
    console.log(currentDate);
    const numberOfWeek = (day) => {    
        if (day > 0 && day <= 7) {
            return 1;
        } else if (day > 7 && day <= 14) {
            return 2;
        } else if (day > 14 && day <= 21) {
            return 3;
        } else if (day > 21) {
            return 4;
        }
    }

    let numberWeek = numberOfWeek(info[1]);
    console.log(numberWeek);
}

getDayInfo('22.12.2021');