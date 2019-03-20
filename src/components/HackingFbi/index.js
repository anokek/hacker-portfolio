import React, { Component } from "react";
import styles from "./index.module.css";

class HackingFbi extends Component {
  constructor(props) {
    super(props);
    this.state = { hackingProcess: "", hacked: false };
  }

  componentDidMount() {
    let hackingLoading = setInterval(() => {
      this.setState({
        hackingProcess: this.state.hackingProcess + "☠/"
      });
    }, 200);

    setTimeout(() => {
      clearInterval(hackingLoading);
      this.setState({ hackingProcess: "ACCESS GRANTED" });
      this.setState({ hacked: true });
      this.props.hack();
    }, 2100);
  }

  render() {
    return (
      <div
        onMouseDown={e => {
          this.props.simpleDragAndDrop(
            this.hackingFbi,
            e,
            this.props.dndPermission
          );
        }}
        className={
          this.state.hacked
            ? [styles.hackingFbi, styles.accessGranted].join(" ")
            : styles.hackingFbi
        }
        ref={ref => (this.hackingFbi = ref)}
      >
        <div className={styles.hackingFbiText}>
          {this.state.hacked ? "" : "HACKING FBI DATABASE"}
        </div>
        <div className={styles.hackingProcess}>
          ‍{this.state.hackingProcess}
        </div>
      </div>
    );
  }
}

export default HackingFbi;
