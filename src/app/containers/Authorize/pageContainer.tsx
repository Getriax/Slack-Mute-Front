import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { AuthActions } from '../../actions';
import { AuthorizePage } from './page';

const mapStateToProps = (state: RootState) => ({
  loading: state.loading,
  authorized: state.authorized,
  router: state.router,
});

const mapDispatchToProps = (dispatch: any) => ({
  authorizeUser: (code: string) => dispatch(AuthActions.authorizeUserAction(code)),
});

export const authorize = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthorizePage);
