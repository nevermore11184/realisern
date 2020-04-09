export const validateEmail = (value: string, expression: RegExp) =>
  expression.test(value);

export const servicesButtonBackground = <T extends {}, P extends keyof T>(
  obj: T,
  type: P,
): T[P] => obj[type];
