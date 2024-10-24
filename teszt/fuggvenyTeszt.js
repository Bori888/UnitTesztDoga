  QUnit.module('tokeletesE', function() {

    QUnit.test('Létezik-e?', (assert) => {
      assert.ok(tokeletesE)
    });
    QUnit.test('Függvény-e?', (assert) => {
        assert.ok(typeof tokeletesE === "function")
    });
    QUnit.test('A szám nem tökéletes: 3', (assert) => {
        assert.equal(tokeletesE(3), false)
     });
    QUnit.test('A szám nem tökéletes: -10', (assert) => {
        assert.equal(tokeletesE(-10), "Pozitív szám csak a bemenet")
    });
    QUnit.test('A szám tökéletes: 6', (assert) => {
        assert.equal(tokeletesE(6), true) 
    }); 
    QUnit.test('Több paraméter', (assert) => {
        assert.equal(tokeletesE(3,4), "Egynél több paraméter")
    }); 
    QUnit.test('Nem szám: kutya', (assert) => {
        assert.equal(tokeletesE("kutya"), "Nem szám")
    });  
    QUnit.test('Nincs paraméter', (assert) => {
        assert.equal(tokeletesE(), "Nincs paraméter")
    }); 
    QUnit.test('Szöveg szám: 15', (assert) => {
        assert.equal(tokeletesE("15"), false)
    });
    QUnit.test('Szöveg szám: 6', (assert) => {
        assert.equal(tokeletesE("6"), true)
    }); 
    QUnit.test('Túlcsordulás:', (assert) => {
        assert.equal(tokeletesE(35445.e+23432), "Túlcsordulás")
    });
    QUnit.test('Tört számok 6.6:', (assert) => {
        assert.equal(tokeletesE(6.6), true)
    });  
    QUnit.test("Tömb tesztelése tökéletesre", (assert) => {
        let Tokeletesek = [6, 28, 496];
        Tokeletesek.forEach = (elem => {
            assert.equal(tokeletesSzamok(elem), true);
        });  
    });
    
  });