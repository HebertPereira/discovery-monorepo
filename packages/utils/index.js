/* eslint-disable import-helpers/order-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
const formatCNPJ = require('./category/formatting/formatCNPJ.js');

// Formatting category
const formatCPF = require('./category/formatting/formatCPF');
const formatDate = require('./category/formatting/formatDate');
const formatMonetaryValue = require('./category/formatting/formatMonetaryValue');
const formatReverseDate = require('./category/formatting/formatReverseDate');
const formatShortDate = require('./category/formatting/formatShortDate');
const formatShortName = require('./category/formatting/formatShortName');
const formatTicket = require('./category/formatting/formatTicket');
const formatToFirstName = require('./category/formatting/formatToFirstName');

// Unformatting category
const getDate = require('./category/getters/getDate');
const formatClearTicket = require('./category/unformatting/formatClearTicket');

// Getters category
const MASKS = require('./MASKS');

module.exports = {
  MASKS,
  formatCNPJ,
  formatCPF,
  formatDate,
  formatMonetaryValue,
  formatReverseDate,
  formatShortDate,
  formatShortName,
  formatTicket,
  formatToFirstName,
  getDate,
  formatClearTicket
};
