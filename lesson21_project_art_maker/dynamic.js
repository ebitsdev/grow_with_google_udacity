var records = [
  {
    "name": "Fred",
    "hobby": "Roller Skating",
    "favoriteMusic": "Disco"
  },
  {
    "name": "Helen",
    "hobby": "Rock Climbing",
    "favoriteMusic": "Alternative"
  },
  {
    "name": "Glen",
    "hobby": "Traveling",
    "favoriteMusic": "Classical"
  }
];

// var records = $('#records');
    // myRecords = JSON.parse($records.text());
$('#myTable').dynatable({
  dataset: {
    records: records
  }
});