import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { HistoryActions, AuthActions } from '../../actions';
import { HistoryPage } from './page';

const mapStateToProps = (state: RootState) => ({
  loading: state.loading,
  mutedHistory: state.mutedHistory,
  router: state.router,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchHistory: () => dispatch(HistoryActions.fetchHisotryAction()),
  deleteHistory: (index: number) => dispatch(HistoryActions.deleteHisotryAction(index)),
  logout: () => dispatch(AuthActions.logoutUserAction()),
});

export const history = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HistoryPage);
