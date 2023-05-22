/**
 *bulkUpdateTag.js
 */

const response = require('../../utils/response');

/**
 * @description : update multiple records of tag with data by filter.
 * @param {Object} params : request body including query and data.
 * @param {Object} req : The req object represents the HTTP request.
 * @param {Object} res : The res object represents HTTP response.
 * @return {Object} : response of bulkUpdate. {status, message, data}
 */
const bulkUpdateTag = ({ tagDb }) => async (params,req,res) => {
  let {
    dataToUpdate, query 
  } = params;
  const updatedTag = (await tagDb.update(query,dataToUpdate)).length;
  return response.success({ data:{ count: updatedTag } });
};
module.exports = bulkUpdateTag;