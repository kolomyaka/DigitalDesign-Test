// Разработка функции, которая принимает дату и возвращает нам ответ в виде
// <День недели>,<номер недели>неделя, <месяц><год>года

const getDayInfo = (date) => {

    let info = date.split('.'); 

    [info[0], info[1]] = [info[1], info[0]]; 
    
    let currentDayOfWeek = new Date(info).toLocaleString('ru', {weekday : 'long'}); // День недели
    let currentMonthOfYear = new Date(info).toLocaleString('ru', {month: 'long'}); // Месяц
    let currentYearOfDate = new Date(info).toLocaleString('ru', {year: 'numeric'}); // Год

    if (info[0] == 8 || info[0] == 3) {  // Проверяем месяц для склонения
        currentMonthOfYear = currentMonthOfYear.replace(/.$/, 'та');
    } else {
        currentMonthOfYear = currentMonthOfYear.replace(/.$/, 'я');
    }

    let DayOfWeek = currentDayOfWeek[0].toUpperCase() + currentDayOfWeek.slice(1);
    let MonthOfYear = currentMonthOfYear[0].toUpperCase() + currentMonthOfYear.slice(1);

    const numberOfWeek = (day) => {  // Определяем номер недели в зависимости от дня
        if (day > 0 && day <= 7) {
            return 1;
        } else if (day > 7 && day <= 14) {
            return 2;
        } else if (day > 14 && day <= 21) {
            return 3;
        } else if (day > 21) {
            return 4;
        }
    };

    let numberWeek = numberOfWeek(info[1]);  
    
    return console.log(DayOfWeek + ',' + numberWeek + ' неделя ' + MonthOfYear + ' ' + currentYearOfDate + " года");
}

getDayInfo('11.03.2022');