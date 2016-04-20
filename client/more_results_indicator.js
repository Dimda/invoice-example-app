TemplateController('MoreResultsIndicator', {
  helpers: {
    // If, once the subscription is ready, we have less rows than we
    // asked for, we've got all the rows in the collection.
    moreResults() {
      return Template.currentData().visibility;
    }
  },

  onCreated() {
    showMoreVisible = ()=> {
      const target = this.$(".showMoreResults");
      if (!target.length) return;
      let threshold = $(window).scrollTop() + $(window).height() - target.height();
      if (target.offset().top <= threshold) {
        this.$( ".showMoreResults" ).trigger( "becameVisible" );
      }
    }
  },

  onRendered() {
    $(window).on('scroll', _.throttle(showMoreVisible, Template.currentData().debounceWait));
  },

  //Gets called when switching to another template (currently I have only one, so it never gets called)
  onDestroyed() {
    $(window).off('scroll', _.throttle(showMoreVisible, Template.currentData().debounceWait));
  }
});
