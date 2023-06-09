const {
  DataTypes, Op 
} = require('sequelize'); 
const taskConstantsEnum = require('../../../constants/taskConstants');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const  convertObjectToEnum  = require('../../../utils/convertObjectToEnum');
function makeModel (sequelize){
  const Task = sequelize.define('task',{
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      unique:true
    },
    name:{ type:DataTypes.STRING },
    description:{ type:DataTypes.STRING },
        
    status:{
      type:DataTypes.ENUM,
      defaultValue:taskConstantsEnum.STATUS.OPEN,
      values:convertObjectToEnum(taskConstantsEnum.STATUS)
    },
    priority:{ type:DataTypes.INTEGER },
    parentId:{ type:DataTypes.INTEGER },
    categoryId:{ type:DataTypes.INTEGER },
    isImportant:{ type:DataTypes.INTEGER },
    isUrgent:{ type:DataTypes.INTEGER },
    isActive:{ type:DataTypes.INTEGER },
    createdAt:{ type:DataTypes.DATE },
    updatedAt:{ type:DataTypes.DATE },
    isDeleted:{ type:DataTypes.BOOLEAN },
    addedBy:{ type:DataTypes.INTEGER },
    updatedBy:{ type:DataTypes.INTEGER }
  }
  ,{
    hooks:{
      beforeCreate: [
        async function (task,options){
          task.isDeleted = false;

        },
      ],
      beforeBulkCreate: [
        async function (task,options){
          if (task !== undefined && task.length) { 
            for (let index = 0; index < task.length; index++) { 
        
              const element = task[index]; 
              element.isActive = true; 
              element.isDeleted = false; 
  
            } 
          }
        },
      ],
    } 
  }
  );
  Task.prototype.toJSON = function () {
    let values = Object.assign({}, this.get());
    
    return values;
  };
  sequelizeTransforms(Task);
  sequelizePaginate.paginate(Task);
  return Task;
}
module.exports = makeModel;