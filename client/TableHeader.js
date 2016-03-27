Template.TableHeader.helpers({
  sortBy: function(){
    return Session.get("sort-by");
  },
  sortOrder: function(){
    return Session.get("sort-order");
  }
});
