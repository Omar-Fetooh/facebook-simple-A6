import { DataTypes } from 'sequelize';
import { sequelize } from '../dbConnection.js';

const userModel = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    }
    ,
    userName: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(200),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    loginStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }

},
    {
        timestamps: true,
    }
)

export default userModel;