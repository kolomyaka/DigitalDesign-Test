// Разработка функции, которая принимает дату и возвращает нам ответ в виде
// <День недели>,<номер недели>неделя, <месяц><год>года

const getDayInfo = (date) => {

    let info = date.split('.'); 

    // Для корректной работы меняем месяц и день местами
    [info[0], info[1]] = [info[1], info[0]]; 
    
    let currentDayOfWeek = new Date(info).toLocaleString('ru', {weekday : 'long'}); // День недели
    let currentMonthOfYear = new Date(info).toLocaleString('ru', {month: 'long'}); // Месяц
    let currentYearOfDate = new Date(info).toLocaleString('ru', {year: 'numeric'}); // Год
    
    // Определяем на какой день недели начинается месяц
    let firstWeekDay = new Date(new Date(info).getFullYear(), new Date(info).getMonth(), 1).getDay();
    // Определяем смещение
    let offsetDate = new Date(info).getDate() + firstWeekDay - 2;
    let weekOfMonth = 1 + Math.floor(offsetDate / 7);

    // Проверяем месяц для склонения
    if (info[0] == 8 || info[0] == 3) {  
        currentMonthOfYear = currentMonthOfYear.replace(/.$/, 'та');
    } else {
        currentMonthOfYear = currentMonthOfYear.replace(/.$/, 'я');
    }

    let dayOfWeek = currentDayOfWeek[0].toUpperCase() + currentDayOfWeek.slice(1);
    let monthOfYear = currentMonthOfYear[0].toUpperCase() + currentMonthOfYear.slice(1);
    
    return dayOfWeek + ',' + weekOfMonth + ' неделя ' + monthOfYear + ' ' + currentYearOfDate + " года";
}

console.log(getDayInfo('04.03.2022'));

