import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('bkz9obo8waevya7urhwg', 'uj56gwmk4v27ddlv', '1hUsDNm7OvjpfUbTVevs', {
    host: 'bkz9obo8waevya7urhwg-mysql.services.clever-cloud.com',
    dialect: 'mysql'
});

const db_connection = async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default db_connection;