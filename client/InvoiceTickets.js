const ITEMS_INCREMENT = 20;

Template.InvoiceTickets.onCreated(function(){
  let self = this;
  self.autorun(function(){
    self.subscribe(
      'invoiceTickets',
      FlowRouter.getParam("filter"),
      FlowRouter.getQueryParam("sortBy"),
      FlowRouter.getQueryParam("sortOrder"),
      Session.get('itemsLimit')
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
      Session.get("itemsLimit")
    );
  },
  formatDate: function(date){
    return moment(date).format("MM-DD-YYYY");
  },
});
Template.InvoiceTickets.moreResults = function() {
    // If, once the subscription is ready, we have less rows than we
    // asked for, we've got all the rows in the collection.
    return !(InvoiceTickets.find().count() < Session.get("itemsLimit"));
}

// whenever #showMoreResults becomes visible, retrieve more results
function showMoreVisible() {
    let threshold, target = $("#showMoreResults");
    if (!target.length) return;

    threshold = $(window).scrollTop() + $(window).height() - target.height();
    if (target.offset().top <= threshold) {
        if (!target.data("visible")) {
            target.data("visible", true);
            Session.set("itemsLimit",
                Session.get("itemsLimit") + ITEMS_INCREMENT);
        }
    } else {
        if (target.data("visible")) {
            target.data("visible", false);
        }
    }
}

// run the above func every time the user scrolls
let throttled = _.throttle(showMoreVisible, 100);
$(window).scroll(throttled);
