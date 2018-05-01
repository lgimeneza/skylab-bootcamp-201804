'use strict';

describe('box', function() {
    it('box.keep() should save the secret ("my secret")correctly and box.retrieve() obtain it', function() {
        box.keep('123', 'my secret');
        expect(box.retrieve('123')).toBe('my secret');
    });
    it('box.retrieve() should throw error if password is wrong', function() {
        expect(function() {
            box.retrieve('678');
       }).toThrow(Error('wrong password'));
    });
    it('box.retrieve() should throw error if password is invalid', function() {
        expect(function() {
            box.retrieve();
       }).toThrow(Error('invalid password'));
    });
    it('box.updatePassword() should replace password correctly with new one and retrieve succeed', function() {
        box.updatePassword('123', '456');
        expect(box.retrieve('456')).toBe('my secret');
    });
});




