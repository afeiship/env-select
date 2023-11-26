// keys:
// './src/shared/stores/modules/sub/test-sbc.ts'  ---> sub/test-sbc
// './src/stores/modules/sub/test-sbc.ts'         ---> sub/test-sbc
// ./modules/sub/test.ts                          ---> sub/test

export const replaceModule = (inputPath: string, inStart: string) => {
  const end = inputPath.split('.').pop();
  const regex = new RegExp(`${inStart}(.*?).${end}`);
  const match = inputPath.match(regex);
  const matched = match && match[1];
  return matched ? match[1] : inputPath;
};
