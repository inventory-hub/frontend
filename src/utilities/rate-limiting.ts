export const debounce = <ArgsT extends unknown[], ReturnT extends unknown>(
  fn: (...args: ArgsT) => ReturnT,
  wait: number
) => {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: ArgsT) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn(...args);
    }, wait);
  };
};

export const throttle = <ArgsT extends unknown[], ReturnT extends unknown>(
  fn: (...args: ArgsT) => ReturnT,
  wait: number
) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: ArgsT) => {
    if (timeout) return;

    timeout = setTimeout(() => {
      fn(...args);
      timeout = null;
    }, wait);
  };
};
