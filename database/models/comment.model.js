import { DataTypes } from 'sequelize';
import { sequelize } from '../dbConnection.js';
import userModel from "./user.model.js"
import postModel from './post.model.js';

const commentModel = sequelize.define('comment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    }
    ,
    content: {
        type: DataTypes.STRING(200),
        allowNull: false
    },

},
    {
        timestamps: true,
    }
)

userModel.hasMany(commentModel, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
});
postModel.hasMany(commentModel, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
});
commentModel.belongsTo(userModel);
commentModel.belongsTo(postModel);


export default commentModel;