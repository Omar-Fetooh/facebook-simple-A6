import { DataTypes } from 'sequelize';
import { sequelize } from '../dbConnection.js';
import userModel from "./user.model.js"

const postModel = sequelize.define('post', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    }
    ,
    title: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    content: {
        type: DataTypes.STRING(200),
        allowNull: false,

    }
})

userModel.hasMany(postModel, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
});

postModel.belongsTo(userModel);

export default postModel;