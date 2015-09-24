Template.autoflyCartDrawer.inheritsHelpersFrom("cartDrawer");
Template.autoflyCartDrawer.inheritsEventsFrom("cartDrawer");
Template.autoflyCartDrawer.replaces("cartDrawer");


Template.openCartDrawer.events({
	'click #btn-checkout': function(event, template) {
		Session.set("displayCart", false);
		$("#cart-drawer-container").modal('hide');   
		return Router.go("cartCheckout");
	},
	'click .remove-cart-item': function(event, template) {
		event.stopPropagation();
		event.preventDefault();
		var currentCartId = Cart.findOne()._id;
		var currentVariant = this.variants;
		console.log(this);
		optionTitle = this.variants.title;
		var confirmAns = confirm("Are you sure you want to remove " + optionTitle + " from the cart?");
		console.log(confirmAns);

		if (confirmAns === true)
		{
			
			console.log("here");
				return Meteor.call('removeFromCart', currentCartId, currentVariant);
		}
	}
})


Template.autoflyOpenCartDrawer.inheritsHelpersFrom("openCartDrawer");
Template.autoflyOpenCartDrawer.replaces("openCartDrawer");

Template.emptyCartDrawer.events({
	'click #btn-keep-shopping': function(event, template) {
		event.stopPropagation();
		event.preventDefault();
		$("#cart-drawer-container").modal('hide');   
	}
});