Template.cartIcon.events({
  'click .cart-icon': function() {
  	Session.set("displayCart",true);
    $("#cart-drawer-container").modal('show');   
  }
});