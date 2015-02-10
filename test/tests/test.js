var url = '127.0.0.1:3000';

describe("Example Tests", function() {
    it("should equal true", function() {
        casper.then(function () {
            var evalResult = casper.evaluate(function() {
                return {
                  "testResults": true,
                }
            });

            evalResult.testResults.should.equal(true);
        });
    });
});
