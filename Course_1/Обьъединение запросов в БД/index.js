db.users.bulkWrite([
    {
        insertOne: {
            "document": { name: "Mike", age: 45, email: "admin@gmail.com" }
        }
    },
    {
        deleteOne: {
            filter: { age: 17 }
        }
    },
    {
        updateOne: {
            filter: { name: "Mike" },
            update: { $set: { email: "new_email@test.com" } }
        }
    },
    {
        replaceOne: {
            filter: { name: "Alexei" },
            replacement: { name: "Victor" }
        }
    },
]) // объединение запросов воедино