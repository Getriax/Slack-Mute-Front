import * as React from 'react';
import * as autoBind from 'auto-bind';
import * as style from './style.css';
import { ChannelsList } from './components';
import { RouterState } from 'app/reducers';
import { ChannelsState } from 'app/models/muted';
import { Loading, Navbar } from '../../components';

interface Props {
  loading: boolean;
  muted: ChannelsState;
  router: RouterState;
  fetchMuted: () => Promise<void>;
  setMuted: (channelIds: string[]) => void;
  logout: () => void;
}

export class MutedPage extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);

    autoBind(this);
  }
  public async componentDidMount() {
    await this.props.fetchMuted();
  }

  private handleMutedChange(id: string) {
    const muted = this.props.muted.channels
      .filter(channel => channel.muted)
      .map(channel => channel.id);

    if (muted.includes(id)) {
      return this.props.setMuted(
        muted.filter(channelId => channelId !== id),
      );
    }

    muted.push(id);
    return this.props.setMuted(muted);
  }

  public render() {
    return (
      <section className={style.container}>
        <Loading loading={this.props.loading}/>
        <Navbar logout={this.props.logout} selected="muted"></Navbar>
        <ChannelsList
          channels={this.props.muted.channels}
          onChange={this.handleMutedChange}
        />
      </section>
    );
  }
}
