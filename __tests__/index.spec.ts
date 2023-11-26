import { replaceModule } from '../src/_utils';

describe('api.basic', () => {
  test('utils: replaceModule', () => {
    const path1 = './src/shared/stores/modules/sub/test-sbc.ts';
    const path2 = './src/stores/modules/sub/test-sbc.ts';
    const path3 = './modules/sub/test.ts';
    const path4 = './sub/auth.ts';

    expect(replaceModule(path1)).toBe('subTestSbc');
    expect(replaceModule(path2)).toBe('subTestSbc');
    expect(replaceModule(path3)).toBe('subTest');
    expect(replaceModule(path4)).toBe('subAuth');
  });
});
