const { faker } = require('@faker-js/faker');
const mysql=require('mysql2');

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test',
    password:'@Durgamalti9871'
  });

try{
    connection .query("SHOW TABLES",(err,result)=>{
        if(err) throw err;
        console.log(result);
    });
}
catch(err){
    console.log(err);
}

let getRandomUser = () => {
    return {
        userId: faker.string.uuid(),  
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    };
};

