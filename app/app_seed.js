var Seed = require('./seed.js');
var when = require('when');
var argv = require('minimist')(process.argv);
var data;

if (argv.f) {
  data = require(argv.f);
}
else {
  data = Array.prototype.concat(
    require('./seed_files/users'),
    require('./seed_files/projects'),
    require('./seed_files/publication_categories'),
    require('./seed_files/notebooks')
  );
}

Seed(data)
.catch(function(e) {
  console.log(e);
  process.exit(1);
})
.done(function() {
  console.log("DB seeded.");
  process.exit(0);
});