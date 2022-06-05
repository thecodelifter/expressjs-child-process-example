import * as Types from './types';

const delay = () =>
  new Promise((resolve) => {
    const timeout = setTimeout(() => {
      resolve(true);
    }, 60000);

    clearTimeout(timeout);
  });

process.on('message', async (params: Types.ChildProcessNameDelay) => {
  await delay();

  process.send?.(params);

  process.exit();
});
