FlowRouter.route('/', {
  name: 'InvoiceTickets',
  triggersEnter: [function(context, redirect) {
    redirect('/today?sortBy=createdAt&sortOrder=1&searchBy=invoiceNumber');
  }]
});

FlowRouter.route('/:filter', {
  name: 'InvoiceTickets',
  action: function(params, queryParams) {
    BlazeLayout.render('invoice_tickets');
  }
});

generateLink = function(filter = FlowRouter.getParam("filter"),
                        sortBy = FlowRouter.getQueryParam("sortBy"),
                        sortOrder = FlowRouter.getQueryParam("sortOrder"),
                        searchBy = FlowRouter.getQueryParam("searchBy")){
  var post = this;
  var params = {filter: filter};
  var queryParams = {
    sortBy: sortBy,
    sortOrder: sortOrder,
    searchBy: searchBy
  };
  var routeName = "InvoiceTickets";
  var path = FlowRouter.path(routeName, params, queryParams);
  return path;
}
