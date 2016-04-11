Template.MoreResultsIndicator.helpers({
  moreResults: ()=>{
    // If, once the subscription is ready, we have less rows than we
    // asked for, we've got all the rows in the collection.
    return Template.currentData().visibility;
  }
});

Template.MoreResultsIndicator.onCreated(()=>{
  showMoreVisible = ()=>{
    const target = this.$(".showMoreResults");
    if (!target.length) return;
    let threshold = $(window).scrollTop() + $(window).height() - target.height();
    if (target.offset().top <= threshold) {
      this.$( ".showMoreResults" ).trigger( "becameVisible" );
    }
  };
});

Template.MoreResultsIndicator.onRendered(()=>{
  $(window).on('scroll', _.throttle(showMoreVisible, Template.currentData().debounceWait));
});

//Gets called when switching to another template (currently I have only one, so it never gets called)
Template.MoreResultsIndicator.onDestroyed(()=>{
  $(window).off('scroll', _.throttle(showMoreVisible, Template.currentData().debounceWait));
});
