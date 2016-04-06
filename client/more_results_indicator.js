const ITEMS_INCREMENT = 20;
Template.more_results_indicator.helpers({
  moreResults: function(){
    // If, once the subscription is ready, we have less rows than we
    // asked for, we've got all the rows in the collection.
    return !(InvoiceTickets.find().count() < Session.get("itemsLimit"));
  },
});
Template.more_results_indicator.events({
  "becameVisible .showMoreResults": function(event, template){
    Session.set("itemsLimit",
    Session.get("itemsLimit") + ITEMS_INCREMENT);
  }
});

// whenever #showMoreResults becomes visible, retrieve more results
function showMoreVisible(){
  let threshold, target = $(".showMoreResults");
  if (!target.length) return;
  threshold = $(window).scrollTop() + $(window).height() - target.height();
  if (target.offset().top <= threshold) {
    var becameVisible = jQuery.Event( "becameVisible" );
    $( ".showMoreResults" ).trigger( becameVisible );
  }
}

// run the above func every time the user scrolls
let throttled = _.throttle(showMoreVisible, 100);
$(window).scroll(throttled);
