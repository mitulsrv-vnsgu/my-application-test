const response = require('../../utils/response');

const getDependencyCount = ({
  taskDb,task_tagDb
})=> async (filter) =>{
  let task = await taskDb.findAll(filter);
  if (task.length){
    let taskIds = task.map((obj) => obj.id);

    const task_tagFilter = { '$or': [{ taskId : { '$in' : taskIds } }] };
    const task_tagCnt =  await task_tagDb.count(task_tagFilter);

    const taskFilter = { '$or': [{ parentId : { '$in' : taskIds } }] };
    const taskCnt =  await taskDb.count(taskFilter);
    let result = {
      task_tag :task_tagCnt ,
      task :taskCnt + 1,
    };
    return response.success({
      message: 'No of Dependency found',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency found',
      data: {  task : 0 }
    });
  }
};

const deleteWithDependency = ({
  taskDb,task_tagDb
})=> async (filter) =>{
  let task = await taskDb.findAll(filter);
  if (task.length){
    let taskIds = task.map((obj) => obj.id);

    const task_tagFilter = { '$or': [{ taskId : { '$in' : taskIds } }] };
    const task_tagCnt =  (await task_tagDb.destroy(task_tagFilter)).length;

    const taskFilter = { '$or': [{ parentId : { '$in' : taskIds } }] };
    const taskCnt =  (await taskDb.destroy(taskFilter)).length;
    let deleted = (await taskDb.destroy(filter)).length;
    let result = {
      task_tag :task_tagCnt ,
      task :taskCnt + deleted,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  task : 0 }
    });
  }
};

const softDeleteWithDependency = ({
  taskDb,task_tagDb
}) => async (filter,updateBody) =>{
  let task = await taskDb.findAll(filter);
  if (task.length){
    let taskIds = task.map((obj) => obj.id);

    const task_tagFilter = { '$or': [{ taskId : { '$in' : taskIds } }] };
    const task_tagCnt =  (await task_tagDb.update(task_tagFilter,updateBody)).length;

    const taskFilter = { '$or': [{ parentId : { '$in' : taskIds } }] };
    const taskCnt =  (await taskDb.update(taskFilter,updateBody)).length;
    let updated = (await taskDb.update(filter,updateBody)).length;
    let result = {
      task_tag :task_tagCnt ,
      task :taskCnt + updated,
    };
    return response.success({
      message: 'No of Dependency deleted',
      data: result
    });
  } else {
    return response.success({
      message: 'No of Dependency deleted',
      data: {  task : 0 }
    });
  }
};
module.exports = {
  getDependencyCount,
  deleteWithDependency,
  softDeleteWithDependency
};
