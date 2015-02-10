var url = '127.0.0.1:3000';

describe("Example Tests", function() {
  before(function() {
    casper.start(url);
    casper.on('Test1', function(message) {
      this.echo(message);
    });
  });
  it("should equal true", function() {
    casper.then(function () {
      var evalResult = casper.evaluate(function() {
        return {
          "true": true,
        }
      });
      evalResult.true.should.equal(true);
    });
  });
});
