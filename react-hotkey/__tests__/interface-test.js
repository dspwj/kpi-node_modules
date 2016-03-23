/*global jest, jasmine, describe, it, expect*/

jest.dontMock('../');

var hotkey = require('../');

describe('exports', function() {
    it('should provide activate function', function() {
        expect(hotkey.activate).toEqual(jasmine.any(Function));
    });
    it('should provide disable function', function() {
        expect(hotkey.disable).toEqual(jasmine.any(Function));
    });
    it('should provide Mixin', function() {
        expect(hotkey.Mixin).toEqual(jasmine.any(Function));
    });
});
