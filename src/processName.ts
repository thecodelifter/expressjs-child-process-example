import * as Types from './types';

const delay = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 10000);
  });
};

process.on('message', async (params: Types.ChildProcessNameDelay) => {
  await delay();

  process.send?.(params);

  process.exit();
});
