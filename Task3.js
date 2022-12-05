var fs=require('fs');
fs.writeFile('welcome.txt', 'Hello Node', function(err) {
    if (err) {
       return console.error(err);
    }
    console.log("data written succussfuly ");
})

fs.readFile('hello.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});