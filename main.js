// 1) Створити масив з 20 чисел та:
//     a) відсортувати його від меншого до більшого.
// let number = [23, 213, 31, 56, 12, 1, 34, 45, 2, 3, 44, 66, 43, 33, 22, 46, 78, 67, 22, 12]
// number.sort((a,b) => a - b)
// console.log(number)
//     b) відсортувати його від більшого до меншого.
// let number = [23, 213, 31, 56, 12, 1, 34, 45, 2, 3, 44, 66, 43, 33, 22, 46, 78, 67, 22, 12]
// number.sort((a,b) => b - a)
// console.log(number)
//     c) Відфілтрувати числа які є кратними 3.
// let number = [23, 213, 31, 56, 12, 1, 34, 45, 2, 3, 44, 66, 43, 33, 22, 46, 78, 67, 22, 12];
// let numbers1 =number.filter((value) => {
//     return value % 3 === 0
// })
// console.log(numbers1)
// d) Відфілтрувати числа які є більшими за 10.
// let number = [23, 213, 31, 56, 12, 1, 34, 45, 2, 3, 44, 66, 43, 33, 22, 46, 78, 67, 22, 12];
// number.filter((value) => {
//     if (value > 10){
//         console.log(value)
//     }
// })
// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// let number = [23, 213, 31, 56, 12, 1, 34, 45, 2, 3, 44, 66, 43, 33, 22, 46, 78, 67, 22, 12];
// number.forEach(((value) =>{
// document.write(value)
//     console.log(value)
// } ))
// f) За допомогою map збільшити кожен елемент в масиві в три рази.
// let number = [23, 213, 31, 56, 12, 1, 34, 45, 2, 3, 44, 66, 43, 33, 22, 46, 78, 67, 22, 12];
// let map = number.map (((value) => {
//    return value * 3
// }))
// console.log(map)
//     g) Порахувати загальну суму всіх елментів у масиві (reduce)
// let priceNumbers =  [23, 213, 31, 56, 12, 1, 34, 45, 2, 3, 44, 66, 43, 33, 22, 46, 78, 67, 22, 12];
// let number = priceNumbers.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue
// },0)
// console.log(number)
//


// 2) Створити масив з 20 стрічок та:
//     a) Відсортувати його в алфавітному порядку
// let userName = ['Olya','Ira','Oksana','Olena','Ivanka','Yarina', 'Yolya','Katya','Kira', 'Lilya','Lida','Lyodmila','Katerina','Roksolana', 'Rita','Sasha','Evgeniya','Larisa','Roksa','Luna'];
// userName.sort(((a, b) => {
//     if (a > b){
//         return +1
//     }
//     return  - 1
// }))
// console.log(userName)
// b) Відсортувати в зворотньому порядку
// let userName = ['Olya','Ira','Oksana','Olena','Ivanka','Yarina', 'Yolya','Katya','Kira', 'Lilya','Lida','Lyodmila','Katerina','Roksolana', 'Rita','Sasha','Evgeniya','Larisa','Roksa','Luna','Anastasiya'];
// userName.sort((a, b) => {
//     if (a < b) {
//         return +1
//     }
//     return - 1
// })
// console.log(userName)

// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// let userName = ['Olya','Ira','Oksana','Olena','Ivanka','Yarina', 'Yolya','Katya','Kira', 'Lilya','Lida','Lyodmila','Katerina','Roksolana', 'Rita','Sasha','Evgeniya','Larisa','Roksa','Luna','Anastasiya'];
// let name = userName.filter((value) =>value.length > 4)
// console.log(name)
// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'

// let userName = ['Olya','Ira','Oksana','Olena','Ivanka','Yarina', 'Yolya','Katya','Kira', 'Lilya','Lida','Lyodmila','Katerina','Roksolana', 'Rita','Sasha','Evgeniya','Larisa','Roksa','Luna','Anastasiya'];
// let name = userName.forEach(value => {
//     document.write(`Sam says, ${value}</br>`)
// })
//
// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
    const users = [
        {name: 'vasya', age: 31, isMarried: false},
        {name: 'petya', age: 30, isMarried: true},
        {name: 'kolya', age: 29, isMarried: true},
        {name: 'olya', age: 28, isMarried: false},
        {name: 'max', age: 30, isMarried: true},
        {name: 'anya', age: 31, isMarried: false},
        {name: 'oleg', age: 28, isMarried: false},
        {name: 'andrey', age: 29, isMarried: true},
        {name: 'masha', age: 30, isMarried: true},
        {name: 'olya', age: 31, isMarried: false},
        {name: 'max', age: 31, isMarried: true}
    ];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
// let chek = users.sort((a, b) => a.age - b.age)
// console.log(users)
// users.sort((a, b) => b.age - a.age)
// console.log(users)
// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let fool = users.filter(value => value.name.length < 5)
// console.log(fool)
// console.log(users)
// fool.sort((a, b) => {
//     if (a.name > b.name) {
//         return +1
//     }
//     return  -1
// })
// console.log(fool)
// fool.sort((a, b) => {
//     if (a.name < b.name){
//         return +1
//     }
//     return - 1
// })
// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
// let userId = users.map((name, index) => name.id = index + 1 )
// console.log(userId)
// d) відсортувати його за індентифікатором
// let full = users.filter((value, index) =>index % 2  {
//
// })
// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

// let usersWi = users.reduce((acc, value) => {
// if (value.isMarried === true) {
//     value.flat = true
//     acc.push(value)
// }
//
//     return acc
//
//
// },[])
// console.log(usersWi)
//
// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// const cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmwwww",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmwwww",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmwwww",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmwwww",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
//];
//
// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
// const volumes = cars.filter(value => {
//     if (value.volume > 3)
//         return value
// })
// console.log(volumes)
// - двигун = 2л
// const volumes = cars.filter(value => {
//     if (value.volume === 2)
//         return value
// })
// console.log(volumes)
// - виробник мерс
// const volumes = cars.filter(value => {
//     if (value.producer === 'mercedes')
//         return value
// })
// console.log(volumes);
// - двигун більше 3х літрів + виробник мерседес
// const values = cars.filter(value => {
//     if (value.volume > 3 && value.producer === 'mercedes')
//         return value
// })
// console.log(values)
// - двигун більше 3х літрів + виробник субару
// const values = cars.filter(value => {
//     if (value.volume > 3 && value.producer === 'subaru')
//         return value
// })
// console.log(values)
// - сили більше ніж 300
// const values = cars.filter((value, index) => {
//     if (value.power > 300)
//         return value
// })
// console.log(values)
// - сили більше ніж 300 + виробник субару
// const values = cars.filter(value => {
//     if (value.power > 300 && value.producer === 'subaru')
//         return value
// })
// console.log(values);
// - мотор серіі ej
// const values = cars.filter((value, index, array) => value.engine.startsWith('ej'))
// console.log(values)

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// const values = cars.filter(value => {
//     if (value.power > 300 && value.producer === 'subaru' && value.engine.startsWith('ej'))
//         return value
// })
// console.log(values)
// - двигун меньше 3х літрів + виробник мерседес
// const values = cars.filter(value => {
//     if (value.volume < 3 && value.producer === 'mercedes')
//         return value
// })
// console.log(values)
// - двигун більше 2л + сили більше 250
// const values = cars.filter(value => {
//     if (value.volume > 2 && value.power > 250)
//         return value
// })
// console.log(values)
// - сили більше 250  + виробник бмв
// const values = cars.filter(value => {
//     if (value.power > 250 && value.producer === 'bmwwww')
//         return value
// })
// console.log(values)
//
//
// - взять слдующий массив
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
//
// -- Відсортувати їх по ID
// usersWithAddress.sort((a, b) => a.id - b.id)
// console.log(usersWithAddress)

// -- Відсортувати їх по ID в зворотньому порядку
// usersWithAddress.sort((a, b) => b.id - a.id)
// console.log(usersWithAddress)

// -- Відсортувати по віку
// usersWithAddress.sort((a, b) => a.age - b.age)
// console.log(usersWithAddress)
// -- Відсортувати по віку в зворотньому порядку
// usersWithAddress.sort((a, b) => b.age - a.age)
// console.log(usersWithAddress)
// -- Відсорутвати по імені
// usersWithAddress.sort((a, b) => {
//     if (a.name > b.name) {
//         return + 1
//     }
//     return - 1
// })
// console.log(usersWithAddress)
// -- Відсорутвати по назві вулиці
// usersWithAddress.sort((a, b) => {
//     if (a.address.street > b.address.street) {
//         return +1
//     }
//     return - 1
// })
// console.log(usersWithAddress)
// -- Відсорутвати по номеру будинку
// usersWithAddress.sort((a, b) => a.address.number - b.address.number )
//
// console.log(usersWithAddress)
// -- Залигити тільки тих, хто молодший ніж 30 (filter)
// const smollYears = usersWithAddress.filter(value => {
//     if (value.age < 30)
//         return value
// })
//  console.log(smollYears);
// -- Залишити тільки одружених
// const isMarried = usersWithAddress.filter(value => {
//     if (value.isMarried === true)
//         return value
// })
// console.log(isMarried)
// -- Залишити тільки одружених, які молодні за 30
// const isMarried = usersWithAddress.filter(value => {
//     if (value.isMarried === true && value.age < 30 )
//         return value
// })
// console.log(isMarried)
// -- Залишити лише тих, в кого парні номери будинків.
// const house = usersWithAddress.filter(value => {
//     if (value.address.number % 2 === 0)
//         return value
// })
// console.log(house)
// -- Порахувати загальний вік всіх людей. (reduce)
// const ageNumbers = usersWithAddress.reduce((age, value) => {
//     return age + value.age
// },0)
// console.log(ageNumbers)
// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
// ageChild = usersWithAddress.reduce((previousValue, currentValue) => {
//     if (currentValue.isMarried === true && currentValue.age > 30) {
//         currentValue.child = true
//         previousValue.push(currentValue)
//     }
//     return previousValue
// },[])
// console.log(ageChild)

//
//
// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.

// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).

// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// let  cars =
//     [{producer:"subaru",year: 2010,power: 400, name: 'Andriy',many:2000 },
//         {producer:"toyota",year: 2007,power: 250, name: 'Andriy',many:2000},
//         {producer:"lada",year: 2011,power: 300, name: 'igor',many:200},
//         {producer:"opel",year: 1998,power: 140, name: 'lida',many:1000},
//         {producer:"lanus",year: 2014,power: 200, name: 'Marik',many:1200},
//         {producer:"audi",year: 2014,power: 165, name: 'vasil',many:1500},
//         {producer:"bmw",year: 2013,power: 120, name: 'katya',many:2800},
//         {producer:"prius",year: 2010,power: 120, name: 'oleksandr',many:8000},
//         {producer:"kalina",year: 2009,power: 350, name: 'Margarit',many:6000},
//         {producer:"citroen",year: 2012,power: 180, name: 'Shyrik',many:4000},
//         {producer:"mercedes",year: 1990,power: 180, name: 'solomiya',many:7000},
//         {producer:"fiat",year: 2017,power: 400, name: 'Masha',many:7300},
//         {producer:"mercedes",year: 2017,power: 230, name: 'Volodya',many:6000} ]
//
// console.log(cars)
// const lodd = cars.map((value, index) =>{
//     if (index % 2 === 0) {
//         value.power = value.power + (value.power * 0.10);
//     }
//     return value
// } )
// console.log(lodd)



//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).

// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
//
// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.