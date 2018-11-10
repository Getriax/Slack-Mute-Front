export namespace LoadingActions {
  export enum Type {
    LOADING_STARTED = 'LOADING_STARTED',
    LOADING_FINISHED = 'LOADING_FINISHED',
  }

  export const loadingStarted = {
    type: Type.LOADING_STARTED,
  };

  export const loadingFinished = {
    type: Type.LOADING_FINISHED,
  };
}
