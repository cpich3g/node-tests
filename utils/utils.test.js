const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
    // if (res !== 44) {
    //     throw new Error(`Expected 44, but got ${res}`)
    // }
});

it('should square a number', () => {
    var res = utils.square(2);

    expect(res).toBe(4).toBeA('number');
    // if (res !== 4) {
    //     throw new Error(`Expected 4, but got ${res}`)
    // }

});

it('should expect some values', () => {
    // expect(12).toNotBe(11);
    // expect({name: 'justin'}).toEqual({name: 'Justin'});
    // expect([2,3,4]).toExclude(1);
    expect({
        name: 'Justin',
        age: 26,
        location: 'India'
    }).toExclude({
        age: 23
    })
});

it('should verify first and last names are set', () => {
    var user = {
        location: 'Bangalore',
        age: 26
    };
    var res = utils.setName(user, 'Justin Joy');
    expect(res).toInclude({
        firstName: 'Justin',
        lastName: 'Joy'
    });
});

it('should async add', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should async square a number', (done) => {
    utils.asyncSquare(4, (square) => {
        expect(square).toBe(16).toBeA('number');
        done();
    });
});