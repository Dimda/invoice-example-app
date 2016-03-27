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
    //Found out that it is impossible to set variable as a field name directly in
    //mongo querry, so I used object instead.
    let sortQuery = {};
    let sortBy = Session.get('sort-by');
    let sortOrder = Session.get('sort-order');
    sortQuery[sortBy] = sortOrder;

    let startDate;
    let endDate = new Date();
    switch (Session.get("filter")) {
      default:
      case "today":
        startDate = new Date(endDate.setDate(endDate.getDate()-1));
        break;
      case "week":
        startDate = new Date(endDate.setDate(endDate.getDate()-7));
        break;
      case "month":
        startDate = new Date(endDate.setDate(endDate.getDate()-30));
        break;
      case "all":
        return InvoiceTickets.find({}, {sort: sortQuery});
        break;
    }
    return InvoiceTickets.find(
      {"createdAt": {$gte: startDate}},
      {sort: sortQuery}
    );
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
