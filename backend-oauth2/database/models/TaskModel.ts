import { DataTypes, Model } from 'sequelize';
import db from '.';

class Task extends Model {
  id!: number;
  titulo!: string;
  concluida!: boolean;
}

Task.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  concluida: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    unique: true,
  },
}, {
  sequelize: db,
  modelName: 'tasks',
  underscored: true,
  timestamps: false,
});

export default Task;
