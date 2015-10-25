var assert = require("assert");
miweb = require(__dirname+"/../app.js");

describe('Miweb', function(){
    describe('Comentar', function(){
        it('Debe cargar el programa', function(){
            assert(miweb, "Cargado");
        });
    });
});
