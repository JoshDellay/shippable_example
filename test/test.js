var url = '127.0.0.1:3000';
var TestObject = {
    key: true
};

describe("A mocha test", function() {
    it("should have a global namespace", function(){
        chai.assert.equal(1,1);
    });
});
