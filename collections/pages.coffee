@Pages = new Meteor.Collection('pages');

Schemas.Pages = new SimpleSchema
	title:
		type:String
		max: 60
        
Pages.attachSchema(Schemas.Pages)