# These values get propagated through the app
# E.g. The 'name' and 'subtitle' are used in seo.coffee

@Config =

	# Basic Details
	name: 'Darxom'
	title: ->
			TAPi18n.__ 'configTitle'
	subtitle: ->
			TAPi18n.__ 'configSubtitle'
	logo: ->
		'<b>' + @name + '</b>'
	footer: ->
		@name + ' - Copyright ' + new Date().getFullYear()

	# Emails
	emails:
		from: 'no-reply@' + Meteor.absoluteUrl()
		contact: 'hello' + Meteor.absoluteUrl()

	# Username - if true, users are forced to set a username
	username: false
	
	# Localisation
	defaultLanguage: 'en'
	dateFormat: 'D/M/YYYY'

	# Meta / Extenrnal content
	privacyUrl: 'https://www.darxe.com/privacy'
	termsUrl: 'https://www.darxe.com/terms'

	# For email footers
	legal:
		address: 'Orem Utah'
		name: 'Darxom'
		url: 'https://www.darxe.com'

	about: 'https://www.darxe.com'
	blog: 'https://www.darxe.com/blog'

	socialMedia:
		facebook:
			url: 'http://facebook.com/darxedigital'
			icon: 'facebook'
		twitter:
			url: 'http://twitter.com/darxedigital'
			icon: 'twitter'
		github:
			url: 'http://github.com/walkward'
			icon: 'github'
		info:
			url: 'https://www.darxe.com'
			icon: 'link'

	#Routes
	homeRoute: '/'
	publicRoutes: ['home']
	dashboardRoute: '/dashboard'