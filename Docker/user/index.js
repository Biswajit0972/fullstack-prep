const db = require('../db/index');
const {userTable} = require('../drizzle/schema')


async function createUser({id, name, email, age}) {
    const user = await db.insert(userTable).values({
        id,
        name, email, age
    });
    console.log(user)

}

async function getUser() {
    const users = await db.select().from(userTable);
    console.log(users)
}

getUser();
// createUser({id: 1, name:"RONI", email: "test@gmail.com", age: 25})