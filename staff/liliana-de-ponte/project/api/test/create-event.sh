curl -v http://localhost:8080/events -X POST -d '{"title":"TRT", "organizer":"Sergio Canovas", "date":"2024-09-16T22:00:00.000Z", "duration": "3 dias", "description":"meditacion", "image":"https://media.giphy.com/media/kYNVwkyB3jkauFJrZA/giphy.gif?cid=790b7611dhp6zc5g5g7wpha1e18yh2o2f65du1ribihl6q9i&ep=v1_gifs_trending&rid=giphy.gif&ct=g", "location":{ "type": "Point", "coordinates": [41.37958472660467, 2.151940534980468] }}'  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmMyZTk5ZGEzNDFjM2EwMTAzNThmYjAiLCJpYXQiOjE3MjQwNTYzODN9.txmlrNctTDG4s5c_SLyCLM1hTS_gH9bEa0ln7EhP4Xo"  -H "Content-Type: application/json"