import { CurrencyLabelPipe } from './currency-label.pipe';

describe('CurrencyLabelPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyLabelPipe();
    expect(pipe).toBeTruthy();
  });
});
