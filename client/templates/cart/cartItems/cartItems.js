Template.autoflyCartDrawerItems.inheritsHelpersFrom("cartDrawerItems");

Template.cartDrawerItems.events ({
	'click #cartSignPlus': function(ev, template)
	{
		event.stopPropagation();
		event.preventDefault();
		qtyField = template.$('input[name="cartItemQty"]');
		quantity = parseInt(qtyField.val()) + 1;
		if (quantity < 0)
			quantity = 0;
		Meteor.call("editCartItemQty", ReactionCore.Collections.Cart.findOne()._id,  this.productId, this.variants, quantity, function(error, res){
			if(error)
				Alerts.add(error.message, "danger");
		});
	},
	'click #cartSignMinus': function(ev, template)
	{
		event.stopPropagation();
		event.preventDefault();
		qtyField = template.$('input[name="cartItemQty"]');
		quantity = parseInt(qtyField.val()) - 1;
		if (quantity > 0 )
		{
			Meteor.call("editCartItemQty", ReactionCore.Collections.Cart.findOne()._id,  this.productId, this.variants, quantity, function(error, res){
				if(error)
					Alerts.add(error.message, "danger");
			});
		}
	}
})
Template.autoflyCartDrawerItems.inheritsEventsFrom("cartDrawerItems");
Template.autoflyCartDrawerItems.replaces("cartDrawerItems");