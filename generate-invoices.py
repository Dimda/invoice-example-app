from pymongo import MongoClient
from datetime import timedelta, datetime
import random
TICKET_COUNT = 800

meteor_mongo = MongoClient("mongodb://localhost:3001")
local_db = meteor_mongo['meteor']

ids = random.sample(range(1000, 10000), TICKET_COUNT)
totals = random.sample(range(1, 100000), TICKET_COUNT)

for num in range(0,TICKET_COUNT):
    created_at = datetime.utcnow() - timedelta(days=num)
    result = local_db.invoiceTickets.insert_one({
        "invoiceNumber": ids[num],
        "total":  totals[num],
        "createdAt": created_at
    })
