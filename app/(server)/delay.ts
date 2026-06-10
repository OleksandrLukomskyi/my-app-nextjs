type DelayOptions =
   | { timeout: number;  shouldFail?: boolean}
   | { timeout?: number; shouldFail: boolean };

export function delayed<>(
   data: T,
   options: DelayOptions = {shouldFail: false, timeout: 1500},
) {
   const { shouldFail, timeout } = options;
   return new Promise<>((resolve, reject) => {
      setTimeout(() => (shouldFail ? reject(data) : resolve(data)), timeout);
   });
}
   









