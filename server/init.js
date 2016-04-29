function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
Meteor.startup(function(){
  if(InvoiceTickets.find().count() === 0){
    const TICKET_COUNT = 800;

    for(let i=0; i<TICKET_COUNT; i++){
      let id = Random.id();
      let total = getRandomInt(1, 1000000);
      let today = new Date();
      let createdAt = new Date(today.setDate(today.getDate()-i));

      let randomEmail = require('random-email');
      let email = randomEmail();

      let result = InvoiceTickets.insert({
            "invoiceNumber": id,
            "total":  total,
            "createdAt": createdAt,
            "email": email
        })
      console.log(result);
    }
  }
});
