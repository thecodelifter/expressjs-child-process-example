import * as Types from './types';

const delay = () =>
  new Promise((resolve) => {
    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      resolve(true);
    }, 10000);
  });

process.on('message', async (params: Types.ChildProcessNameDelay) => {
  await delay();

  process.send?.(params);

  process.exit();
});
