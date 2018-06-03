'use strict';

var Model = require('ampersand-model');

module.exports = Model.extend({
	props: {
		link: {
			type: 'string',
			required: true,
			default: '',
			allowNull: true
		},
		id: 'string',
		title: 'string',
		description: 'string',
		favorite: 'boolean',
		note: 'string',
		status: 'string'
	}
});