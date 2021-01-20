db.users.count({ age: 43 }) // подсчет объектов по определенному фильтру


db.users.distinct("email") // выборка всех email у всех пользователей


db.users.aggregate([
    { $match: { name: "Mike" } },
    { $group: { _id: "$name", age: { $sum: "$age" } }}
])