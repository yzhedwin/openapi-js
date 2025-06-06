/*
 * Gantt Chart Schedule API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.68
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GanttChartScheduleApi);
  }
}(this, function(expect, GanttChartScheduleApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('SerializableColor', function() {
      beforeEach(function() {
        instance = new GanttChartScheduleApi.SerializableColor();
      });

      it('should create an instance of SerializableColor', function() {
        // TODO: update the code to test SerializableColor
        expect(instance).to.be.a(GanttChartScheduleApi.SerializableColor);
      });

      it('should have the property red (base name: "red")', function() {
        // TODO: update the code to test the property red
        expect(instance).to.have.property('red');
        // expect(instance.red).to.be(expectedValueLiteral);
      });

      it('should have the property green (base name: "green")', function() {
        // TODO: update the code to test the property green
        expect(instance).to.have.property('green');
        // expect(instance.green).to.be(expectedValueLiteral);
      });

      it('should have the property blue (base name: "blue")', function() {
        // TODO: update the code to test the property blue
        expect(instance).to.have.property('blue');
        // expect(instance.blue).to.be(expectedValueLiteral);
      });

      it('should have the property alpha (base name: "alpha")', function() {
        // TODO: update the code to test the property alpha
        expect(instance).to.have.property('alpha');
        // expect(instance.alpha).to.be(expectedValueLiteral);
      });

    });
  });

}));
