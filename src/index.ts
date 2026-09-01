type NetworkLoadingState = {
  state: 'loading';
};
type NetworkFailedState = {
  state: 'failed';
  code: number;
};
type NetworkSuccessState = {
  state: 'success';
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};

type NetworkState = NetworkLoadingState | NetworkFailedState | NetworkSuccessState;

function logger(state: NetworkState) {
  switch (state.state) {
    case 'loading':
      console.log('Loading...');
      break;
    case 'failed':
      console.log(`Failed with code: ${state.code}`);
      break;
    case 'success':
      console.log(
        `Success! Title: ${state.response.title}, Duration: ${state.response.duration}, Summary: ${state.response.summary}`,
      );
      break;
    default:
      const _exhaustiveCheck: never = state;
      throw new Error(`Unhandled state: ${_exhaustiveCheck}`);
  }
}
