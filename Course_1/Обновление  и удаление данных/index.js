db.users.updateOne({ age: 43 }, { $set: { age: 50 } }) // обновление лишь одной записи
db.users.updateMany({ age: 37 }, { $set: { age: 30 } }) // обновление сразу нескольких записей
db.users.updateMany({ age: 30 }, { $set: { name: "admin", email: "admin@mail.ru" } })


db.users.replaceOne(
    { age: 30 },
    { name: "New User", hasCar: 2, password: "34534", "hasWife": true }
) // замена параметров у одного объекта


db.users.deleteOne({ age: 30 }) // удаление парамера только у одного объекта
db.users.deleteMany({ age: 30 }) // удаление парамера сразу у нескольких объектов