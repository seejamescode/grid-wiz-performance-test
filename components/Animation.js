import Pixels from "./Pixels";
import kirby1 from "../data/kirby1";
import kirby2 from "../data/kirby2";
import kirby3 from "../data/kirby3";

const kirbyOrder = [kirby1, kirby2, kirby3, kirby2];

class Index extends React.Component {
  state = {
    interval: 0
  };

  componentDidMount() {
    var intervalId = setInterval(this.timer, 150);
    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  timer = () => {
    this.setState(state => ({
      interval:
        state.interval === kirbyOrder.length - 1 ? 0 : state.interval + 1
    }));
  };

  render() {
    return (
      <div className="kirby--grid">
        {kirbyOrder[this.state.interval].map((item, index) => (
          <Pixels {...item} key={index} />
        ))}
      </div>
    );
  }
}

export default Index;
