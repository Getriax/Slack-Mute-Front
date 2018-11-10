import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { HistoryActions } from '../../actions';
import { HistoryPage } from './page';

const mapStateToProps = (state: RootState) => ({
  loading: state.loading,
  mutedHistory: state.mutedHistory,
  router: state.router,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchHistory: () => dispatch(HistoryActions.fetchHisotryAction()),
  deleteHistory: (index: number) => dispatch(HistoryActions.deleteHisotryAction(index)),
});

export const history = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HistoryPage);
