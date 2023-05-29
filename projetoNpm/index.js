const dayjs = require("dayjs");



function birthday(date){
        const birthday = dayjs(date);
        const today = dayjs();
        const nextBirthday = dayjs(`${today.year()}-${birthday.format("MM-DD")}`);
        const age = today.diff(birthday, "year");
        const daysUntilBirthday = nextBirthday.diff(today, "day") + 1;
        const isBirthday = daysUntilBirthday === 0;
        const message = isBirthday
            ? `Hoje é seu aniversário! Você está completando ${age} anos!`
            : `Faltam ${daysUntilBirthday} dias para seu aniversário de ${age} anos!`;
        return message;



}

console.log(birthday("1995-05-30"));