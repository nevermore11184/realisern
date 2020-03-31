export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const REQUEST = 'REQUEST';

export const createAction = <T extends object, P extends object>(
  type: string,
) => (req: T, args: P): {args: P; payload: T; type: string} => ({
  type,
  payload: req,
  args,
});

/**
 * Generates Redux Action types for async actions
 * @param action
 * @returns {{request: string, success: string, failed: string}}
 */

interface BuildStatusAction {
  request: string;
  success: string;
  failure: string;
  [key: string]: string;
}

export function buildStatusAction(action: string): BuildStatusAction {
  return {
    request: `${action}/${REQUEST}`,
    success: `${action}/${SUCCESS}`,
    failure: `${action}/${FAILURE}`,
  };
}

/**
 * generates redux actions by action types
 * @param actionType
 * @return {{}}
 */

interface ActionsByTypes {
  request(): any;
  success(): any;
  failure(): any;
  [key: string]: object;
}

export const createActionByTypes = (
  actionType: BuildStatusAction,
): ActionsByTypes => {
  const keys = Object.keys(actionType);
  return keys.reduce((previousValue, key: string) => {
    previousValue[key] = createAction(actionType[key]);
    return previousValue;
  }, {} as ActionsByTypes);
};

/**
 * Creates reducer
 * @param initialState
 * @param actionHandlers
 * @return {function(*=, *=): *}
 */
