var url = '127.0.0.1:3000';
var TestObject = {
    key: true
};

describe("A mocha test", function() {
    before(function() {
        casper.start(url);
    });
    it("should have a global namespace", function() {
        casper.then(function () {
            var evalResult = casper.evaluate(function() {
                return true;
            });
            evalResult.should.equal(true);
        });
    });
});