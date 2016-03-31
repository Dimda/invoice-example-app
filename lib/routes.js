FlowRouter.route('/', {
  name: 'InvoiceTickets',
  triggersEnter: [function(context, redirect) {
    redirect('/today?sortBy=createdAt&sortOrder=1');
  }]
});

FlowRouter.route('/:filter', {
  name: 'InvoiceTickets',
  action: function(params, queryParams) {
    Session.set("itemsLimit", 20);
    BlazeLayout.render('InvoiceTickets');
  }
});

generateLink = function(filter = FlowRouter.getParam("filter"),
                        sortBy = FlowRouter.getQueryParam("sortBy"),
                        sortOrder = FlowRouter.getQueryParam("sortOrder")){
  var post = this;
  var params = {filter: filter};
  var queryParams = {
    sortBy: sortBy,
    sortOrder: sortOrder
  };
  var routeName = "InvoiceTickets";
  var path = FlowRouter.path(routeName, params, queryParams);
  return path;
}
