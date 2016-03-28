Meteor.subscribe("invoiceTickets");
//Setting default session values
Session.set("filter", "today");
Session.set("sort-by", "createdAt");
Session.set("sort-order", 1);

Template.registerHelper('equals', function(a, b){
  return a === b;
});

Template.InvoiceTickets.helpers({
  tickets: function(){
    return InvoiceTickets.byTimeRange(Session.get('filter'), Session.get('sortBy'), Session.get('sortOrder'));
  },
  formatDate: function(date){
    return moment(date).format("MM-DD-YYYY");
  },
});

Template.InvoiceTickets.events({
  "click .today": function(event, template){
     Session.set("filter", "today");
  },
  "click .week": function(event, template){
     Session.set("filter", "week");
  },
  "click .month": function(event, template){
     Session.set("filter", "month");
  },
  "click .all": function(event, template){
     Session.set("filter", "all");
  },
  "click .total-sort": function(event, template){
    if(Session.get("sort-order") == 1){
      Session.set("sort-order", -1);
    }else{
      Session.set("sort-order", 1);
    }
    Session.set("sort-by", "total");
  },
  "click .created-at-sort": function(event, template){
     if(Session.get("sort-order") == 1){
       Session.set("sort-order", -1);
     }else{
       Session.set("sort-order", 1);
     }
     Session.set("sort-by", "createdAt");
  },
});
