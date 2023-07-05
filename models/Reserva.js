// TODO: Crear modelo de datos de Reserva

// TODO: Crear modelo de datos de Reserva
const { DataTypes, sequelize } = require('../database');

const Reserva = sequelize.define('Reserva', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    origen: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    destino: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    fecha_salida: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fecha_llegada: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'reservas'
});

// Crear tabla si no existe ({force: true} borra y crea la tabla)
Reserva.sync({ force: false }).then(() => {
    console.log('Tabla de Reservas creada');
});

module.exports = Reserva;