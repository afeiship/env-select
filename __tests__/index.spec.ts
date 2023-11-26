import { replaceModule } from '../src/_utils';

describe('api.basic', () => {
  test('utils: replaceModule', () => {
    const path1 = './src/shared/stores/modules/sub/test-sbc.ts';
    const path2 = './src/stores/modules/sub/test-sbc.ts';
    const path3 = './modules/sub/test.ts';

    expect(replaceModule(path1, 'modules/')).toBe('sub/test-sbc');
    expect(replaceModule(path2, 'modules/')).toBe('sub/test-sbc');
    expect(replaceModule(path3, 'modules/')).toBe('sub/test');
  });
});
