import { replaceModule } from '../src/_utils';

describe('api.basic', () => {
  test('utils: replaceModule', () => {
    const path1 = './src/shared/stores/modules/sub/test-sbc.ts';
    const path2 = './src/stores/modules/sub/test-sbc.ts';
    const path3 = './modules/sub/test.ts';
    const path4 = './sub/auth.ts';

    expect(replaceModule(path1)).toBe('sub.testSbc');
    expect(replaceModule(path2)).toBe('sub.testSbc');
    expect(replaceModule(path3)).toBe('sub.test');
    expect(replaceModule(path4)).toBe('sub.auth');
  });

  test('utils: replaceModule test.ctrl.ts/test_ctrl.ts', () => {
    const path1 = './src/shared/modules/test.ctrl.ts';
    const path2 = './sub/auth_ctrl.ts';
    expect(replaceModule(path1)).toBe('testCtrl');
    expect(replaceModule(path2)).toBe('sub.authCtrl');
  });

  test('utils: with default modules folder', () => {
    const path1 = './src/shared/services/test/ap1.ts';
    const path2 = './src/shared/helpers/mod1/util1.ts';

    expect(replaceModule(path1, 'services/')).toBe('test.ap1');
    expect(replaceModule(path2, 'helpers/')).toBe('mod1.util1');
  });
});
