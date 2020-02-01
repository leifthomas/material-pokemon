import { FromResourceNamePipe } from './from-resource-name.pipe';

describe('FromResourceNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FromResourceNamePipe();
    expect(pipe).toBeTruthy();
  });
});
