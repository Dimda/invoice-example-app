Template.InvoiceTickets.onCreated(function(){
  let self = this;
  self.itemsLimit = new ReactiveVar(30);
  self.autorun(function(){
    self.subscribe(
      'invoiceTickets',
      FlowRouter.getParam("filter"),
      FlowRouter.getQueryParam("sortBy"),
      FlowRouter.getQueryParam("sortOrder"),
      self.itemsLimit.get()
    );
  });
});

Template.registerHelper('equals', function(a, b){
  return a == b;
});

Template.InvoiceTickets.helpers({
  tickets: function(){
    return InvoiceTickets.byTimeRange(
      FlowRouter.getParam("filter"),
      FlowRouter.getQueryParam("sortBy"),
      FlowRouter.getQueryParam("sortOrder"),
      Template.instance().itemsLimit.get()
    );
  },
  formatDate: function(date){
    return moment(date).format("MM-DD-YYYY");
  },
  isVisible: ()=>{
    return (InvoiceTickets.find().count() >= Template.instance().itemsLimit.get());
  }
});
Template.InvoiceTickets.events({
  "becameVisible .showMoreResults": function(event, template){
    template.itemsLimit.set(template.itemsLimit.get() + this.itemsIncrement);
  }
});
