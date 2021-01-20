db.users.find() // выведение всех записей в консоль
db.users.find().limit(3) // выведение первых трёх записей
db.users.find({}, { _id: 0 }).limit(3) // выведение первых трёх записей без пункта id


db.users.find({}, { _id: 0 }).sort({ age: 1 }) // сортировка данных по age в порядке возрастания
db.users.find({}, { _id: 0 }).sort({ age: -1 }) // сортировка данных по age в порядке убывания
db.users.find({}, { _id: 0 }).sort({ age: 1, name: 1 }) // сортировка сразу по нескольким показателям


db.users.find({ age: 43 }, { _id: 0 }) // фильтер на вывод значений в которых возраст равен 43
db.users.find({ age: 43, email: "test@gmail.com" }, { _id: 0 }) // фильтер по возрасту и email


db.users.find({ $or: [{ age: 43 }, { email: "test@gmail.com" }] }, { _id: 0 }) // фильтер объектов либо по age, либо по email (в случае осутствия одного из значений) 


