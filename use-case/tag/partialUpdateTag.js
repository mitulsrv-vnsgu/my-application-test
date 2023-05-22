/**
 *partialUpdateTag.js
 */

const  tagEntity = require('../../entities/tag');
const response = require('../../utils/response');

/**
 * @description : partially update record with data by id;
 * @param {Object} params : request body.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {obj} : updated Tag. {status, message, data}
 */
const partialUpdateTag = ({ tagDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedTag = await tagDb.update(query,dataToUpdate);
  if (!updatedTag || updatedTag.length == 0){
    return response.recordNotFound();
  }
  return response.success({ data:updatedTag[0] });
};
module.exports = partialUpdateTag;