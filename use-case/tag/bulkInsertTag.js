
/**
 *bulkInsertTag.js
 */

const  tagEntity = require('../../entities/tag');
const response = require('../../utils/response');

/**
 * @description : create multiple records in database.
 * @param {Object} dataToCreate : data for creating documents.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : created Tags. {status, message, data}
 */
const bulkInsertTag = ({
  tagDb,createValidation 
}) => async (dataToCreate,req,res) => {
  let tagEntities = dataToCreate.map(item => tagEntity(item));
  let createdTag = await tagDb.createMany(tagEntities);
  return response.success({ data:{ count: createdTag.length } });
};
module.exports = bulkInsertTag;