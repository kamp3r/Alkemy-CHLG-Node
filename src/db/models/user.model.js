const { Model, DataTypes, literal } = require('sequelize')
const moment = require('moment')

const USER_TABLE = 'user'

const UserSchema = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    password:{
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.ENUM({
            values: ['admin', 'user']
        }),
        defaultValue: 'user'
    },
    operative: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    creationDate: {
        field: 'creation_date',
        type: 'TIMESTAMP',
        defaultValue: literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        get: function() {
            return moment(this.getDataValue('creationDate')).format('DD-MM-YYYY HH:mm:ss')
        }
    }
}

class User extends Model{
    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false,
        }
}
}

module.exports= {User, UserSchema, USER_TABLE}
