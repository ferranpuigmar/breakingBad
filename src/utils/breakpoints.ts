const orderBySmallBreakpoint = (a: number, b: number) => {
  if (a > b) return 1;
  if (a === b) return 0;
  return -1;
};

export const getBreakpoints = (breakpointsList: BreakpointList) => {
  const breakpoints = [];

  for (const prop in breakpointsList) {
    breakpoints.push(parseInt(breakpointsList[prop as BreakpointSize].min));
  }
  return breakpoints.sort(orderBySmallBreakpoint);
};

enum BreakpointSize {
  XXL = 'xxl',
  XL = 'xl',
  LG = 'lg',
  MD = 'md',
  SM = 'sm'
}

type Breakpoint = {
  min: string;
};

type BreakpointList = {
  [BreakpointSize.XXL]: Breakpoint;
  [BreakpointSize.XL]: Breakpoint;
  [BreakpointSize.LG]: Breakpoint;
  [BreakpointSize.MD]: Breakpoint;
  [BreakpointSize.SM]: Breakpoint;
};
