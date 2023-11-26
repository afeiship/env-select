import { replaceModule } from './_utils';

type ModuleFiles = Record<string, any>;

interface Options {
  keyFn?: (key: string) => string;
  valueFn?: (value: any, context: any) => any;
}

const defaults: Options = {
  keyFn: (key: string) => replaceModule(key),
  valueFn: (key: any, context: any) => context?.default || context,
};


const scan = (inModuleFiles: ModuleFiles, inOptions?: Options): Record<string, any> => {
  const options = { ...defaults, ...inOptions };
  const keys = Object.keys(inModuleFiles);
  return keys.reduce((acc: any, key: string) => {
    const value = inModuleFiles[key];
    acc[options.keyFn!(key)] = options.valueFn!(key, value);
    return acc;
  }, {});
};

export default scan;
