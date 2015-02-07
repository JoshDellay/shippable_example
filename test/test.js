
if (!(typeof MochaWeb === 'undefined')){
    MochaWeb.testOnly(function(){

        describe('Intro', function(){
            it('Test example 1', function(){
                chai.assert.equal(1, 1);
            });
        });

    });
}