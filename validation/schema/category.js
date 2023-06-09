const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('../commonFilterValidation');

const createSchema = joi.object({
  name: joi.string().allow(null).allow(''),
  parentId: joi.number().integer().allow(0),
  description: joi.string().allow(null).allow(''),
  isActive: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  userId: joi.string().allow(null).allow('')
}).unknown(true);

const updateSchema = joi.object({
  name: joi.string().allow(null).allow(''),
  parentId: joi.number().integer().allow(0),
  description: joi.string().allow(null).allow(''),
  isActive: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  userId: joi.string().allow(null).allow(''),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
let filterValidationSchema = joi.object({
  options: options,
  ...Object.fromEntries(keys.map(key => [key, joi.object({
    name: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    parentId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    description: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    isActive: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
    isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
    userId: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
    id: joi.any()
  }).unknown(true),])),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
}).unknown(true);

module.exports = {
  createSchema,
  updateSchema,
  filterValidationSchema
};