import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { MutedActions } from '../../actions';
import { MutedPage } from './page';

const mapStateToProps = (state: RootState) => ({
  loading: state.loading,
  muted: state.muted,
  router: state.router,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchMuted: () => dispatch(MutedActions.fetchMutedAction()),
  setMuted: (channelIds: [string]) => dispatch(MutedActions.setMutedAction(channelIds)),
});

export const muted = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MutedPage);
