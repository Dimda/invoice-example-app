Meteor.subscribe("invoiceTickets");

Template.InvoiceTickets.helpers({
  tickets: function(){
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
        return InvoiceTickets.find();
        break;
    }
    return InvoiceTickets.find({"createdAt": {$gte: startDate}})
  },
  formatDate: function(date){
    return moment(date).format("MM-DD-YYYY");
  }
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
});
