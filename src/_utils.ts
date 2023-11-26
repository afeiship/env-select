// keys:
// './src/shared/stores/modules/sub/test-sbc.ts'  ---> sub/test-sbc
// './src/stores/modules/sub/test-sbc.ts'         ---> sub/test-sbc
// ./modules/sub/test.ts                          ---> sub/test

// replace sub/test/child-test ---> sub.testChild
// replace sub/test/abc        ---> sub.test.abc

const camelize = (inStr: string) => {
  const parts = inStr.split('/');
  const filename = parts.pop();
  const camelcaseName = filename?.replace(/[._-]/g, '_').replace(/_(\w)/g, (_, c) => (c ? c.toUpperCase() : ''));
  return [...parts, camelcaseName].join('.');
};

export const replaceModule = (inputPath: string) => {
  const end = inputPath.split('.').pop();
  const start = inputPath.includes('modules') ? 'modules/' : './';
  const regex = new RegExp(`${start}(.*?).${end}`);
  const match = inputPath.match(regex);
  const matched = match && match[1];
  return matched ? camelize(match[1]) : inputPath;
};
