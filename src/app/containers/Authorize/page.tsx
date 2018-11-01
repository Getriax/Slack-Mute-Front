import * as React from 'react';
import * as style from './style.css';
import * as queryString from 'query-string';
import { RouterState } from 'app/reducers';

interface Props {
  authorized: boolean;
  router: RouterState;
  authorizeUser: (code: string) => void;
}

interface State {
  text: string;
}

export class AuthorizePage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      text: 'Processing...',
    };
  }
  public componentDidMount() {
    const { location } = this.props.router;
    const query = location ? queryString.parse(location.search) : undefined;

    if (query && query.code) {
      this.props.authorizeUser(query.code as string);
    } else {
      this.setState({ text: 'Failed :(' });
    }
  }

  public render() {
    return (
      <section className={style.container}>
        <h1>{this.state.text}</h1>
      </section>
    );
  }
}
