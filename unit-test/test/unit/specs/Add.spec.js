import add from '@/add'

describe('add', () => {
  it('2 plus 3 equals 5', () => {
    expect(add(2, 3)).to.equal(6);
  })
});

describe('add', () => {
  it('3 plus 4 equals 7', () => {
    expect(add(3, 4)).to.equal(7);
  })
});
