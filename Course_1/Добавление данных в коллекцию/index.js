db.users.insertOne(
    {
        "name": "Alexei",
        "email": "test@gmail.com",
        "age": 23,
        "sex": "mail",
        "hasCar": true,
        "favColors": ["Green", "Red", "Blue"],
        "child": {
            "name": "Jhon",
            "sex": "mail",
            "age": 6
        }
    }
) // передача данных в коллекцию


db.users.insertOne(
    {
        "_id": 2,
        "name": "Jack",
        "email": "test@gmail.com",
        "age": 43,
        "sex": "mail",
        "hasCar": false,
        "favColors": ["Green", "Blue"],
        "child": {
            "name": "Alex",
            "sex": "mail",
            "age": 15
        }
    }
)


db.users.insertOne(
    {
        "name": "Jack",
        "email": "test@gmail.com",
        "age": 43,
        "sex": "mail",
        "hasCar": false,
        "favColors": ["Green", "Blue"],
        "password": "dsgrg"
    }
)


db.users.insertOne(
    {
        "name": "George",
        "age": 37,
        "sex": "mail",
        "hasCar": true,
        "birthday": new Date('1984-01-14')
    }
)




db.users.insertMany([
    {
        "name": "Боб",
        "age": 37,
        "sex": "mail",
        "hasCar": true,
        "birthday": new Date('1984-01-14')
    },
    {
        "name": "Кристи",
        "age": 17,
        "sex": "femail",
        "hasCar": false,
    }
]) // добавление сразу нескольких записей