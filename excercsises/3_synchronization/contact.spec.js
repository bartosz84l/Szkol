var contact = require('./pages/contact');

describe('Protractor Workshop app', function() {

	beforeEach(function () {
		contact.get();
	});

	it('hould have Contact page with title "Protractor workshop | Contact us"', function(){
		expect(contact.getTitle()).toEqual("Protractor workshop | Contact us");
	});

	xit('should display text "Your message has been sent." when user sends message  ', function(){
		

	});

});
