'use strict';

function Airport(){}
Airport.prototype.planes = function(){ return []; };
describe('Airport', function(){
  var airport;
  beforeEach(function(){
    airport = new Airport();
  });
  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });
});
