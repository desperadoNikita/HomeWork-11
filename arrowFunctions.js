// Функція splitMessage
const splitMessage = (message, delimiter) => {
    const arr = message.split(delimiter);
    return arr;
    };
    
    const message = "Hellow, World. How Are You?";
    const delimiter = " ";
    const arr = splitMessage(message, delimiter);
    
    console.log(arr);
    
    // Функція makeStringFromArray
    const makeStringFromArray = (array, separator) => {
    const string = array.join(separator);
    return string;
    };
    
    const array = ["apple", "cherry", "juice"];
    const separator = " ";
    const string = makeStringFromArray(array, separator);
    
    console.log(string);
    
    // Функція checkFruit
    const checkFruit = (fruit) => {
    const fruits = ["apricots", "figs", "kiwi", "apples", "mango"];
    return fruits.includes(fruit);
    };
    
    console.log(checkFruit("apples"));
    
    // Функція spliceArray
    const spliceArray = (array) => {
    const arr = array.splice(2, 3)
    return arr;
    };
    
    const message1 = spliceArray( ["I", "study", "JavaScript", "right", "now"]);
    console.log(message1);
    
    // Функція sliceArray
    const sliceArray = (array) => {
    const arr = array.slice(0, 2);
    return arr;
    };
    
    const message2 = sliceArray(["I", "study", "JavaScript", "right", "now"]);
    console.log(message2);
    
    // Функція concatArr
    const concatArr = (array1, array2) => {
    const arr = array1.concat(array2);
    return arr;
    };
    
    const message3 = concatArr(["I", "study"], ["JavaScript", "right", "now"] );
    console.log(message3);
    
    // user і його методи
    const user = {
    firstName: "Nikita",
    lastName: "Khaitul",
    age: 15,
    height: 181,
    weight: 64,
    hobby: ["football", "programming"],
    doHomework(subject) {
    console.log(`Зараз роблю домашку з ${subject}.`);
    },
    takeWalk(weather) {
    if (weather === сонячно) {
    console.log(`Дуже гарний день для прогулянки. Піду погуляю.`);
    } else {
    console.log(`Сьогодні залишусь вдома.`);
    }
    }
    };
    
    console.log(user);
    
    // Функція convertToMiles
    const convertToMiles = (kilometers) => {
    const miles = kilometers * 0.6214;
    return miles;
    };
    
    const distanceInKilometers = 5;
    const distanceInMiles = convertToMiles(distanceInKilometers);
    console.log(distanceInMiles);
    
    // Функція spliceArr
    const spliceArr = (array) => {
    const start = array.indexOf("Orange");
    array.splice(start, 1, "Grapefruit");
    return array;
    };
    
    const fruits = spliceArr (["Apple", "Orange", "Plum"]);
    console.log(fruits);
    
    // workers і функції для роботи з ним
    const workers = [
        {
          name: "bill",
          job: "architect",
          salary: 10000,
        },
        {
          name: "Arni",
          job: "actor",
          salary: 100000,
        },
        {
          name: "Bob",
          job: "singer",
          salary: 40000,
        },
        {
          name: "Ann",
          job: "manager",
          salary: 30000,
        },
        {
          name: "Antony",
          job: "Footballer",
          salary: 90000,
        },
        {
          name: "John",
          job: "builder",
          salary: 25000,
        },
        {
          name: "Arthur",
          job: "teacher",
          salary: 20000,
        },
      ];
    
      const workers1 = [
        {
          name: "Robert",
          job: "Dentist",
          salary: 90000,
        },
        {
          name: "Pietro",
          job: "Computer Systems Analyst",
          salary: 120000,
        },
        {
          name: "James",
          job: "Web Developer",
          salary: 100000,
        },
      ];
    
      const workers2 = [...workers, ...workers1];
  console.log(workers2);

  const averageSalary = (workers) => {
    const salaries = [];
    let total = 0;
    for (const worker of workers) {
      salaries.push(worker.salary);
      total += worker.salary;
    }
    const result = total / salaries.length;
    return Number(result);
  }
  
  const result = averageSalary(workers);
  console.log(result);
     
  // user1 і функції для роботи з ним

  const user1 = {
    firstName: "Nikita",
    lastName: "Khaitul",
    age: 15,
    height: 170,
    weight: 64,
    hobby: "programming",
    location: {
        country: "Ukraine",
        city: "Kyiv",
    }


};

const hello = (user) => {
  const {firstName, lastName, age, height, weight, hobby, location: {country, city}} = user;
  console.log(`Вітаю ${firstName} ${lastName}, ваш вік ${age}, ваш ріст ${170}, ваша вага ${weight}, ваше хоббі ${hobby}, ваша локація: ${country}, ${city}.`);
}

hello(user);
