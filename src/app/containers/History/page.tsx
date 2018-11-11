import * as React from 'react';
import * as autoBind from 'auto-bind';
import * as style from './style.css';
import { RouterState } from 'app/reducers';
import { Loading, Navbar } from '../../components';
import { HistoryState } from 'app/models/history';
import { HistoryList } from './components';

interface Props {
  loading: boolean;
  mutedHistory: HistoryState;
  router: RouterState;
  fetchHistory: () => void;
  deleteHistory: (index: number) => void;
  logout: () => void;
}

export class HistoryPage extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);

    autoBind(this);
  }
  public async componentDidMount() {
    await this.props.fetchHistory();
  }

  private handleHistoryDelete(index: number) {
    this.props.deleteHistory(index);
  }

  public render() {
    return (
      <section className={style.container}>
        <Loading loading={this.props.loading}/>
        <Navbar logout={this.props.logout} selected="history"></Navbar>
        <HistoryList
          history={this.props.mutedHistory.history} onDelete={this.handleHistoryDelete}
        />
      </section>
    );
  }
}
