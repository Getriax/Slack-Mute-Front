import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { authorizeUserAction } from '../../actions';
import { AuthorizePage } from './page';

const mapStateToProps = (state: RootState) => ({
  authorized: state.authorized,
  router: state.router,
});

const mapDispatchToProps = (dispatch: any) => ({
  authorizeUser: (code: string) => dispatch(authorizeUserAction(code)),
});

export const authorize = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthorizePage);
