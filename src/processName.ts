import * as Types from './types';

const delay = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 60000);
  });

process.on('message', async (params: Types.ChildProcessNameDelay) => {
  await delay();

  process.send?.(params);

  process.exit();
});
