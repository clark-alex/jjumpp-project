import React, { Component } from 'react';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      loadingParam: null,
    };
  }

  //   loadingParam must be passed down

  componentDidUpdate(prevProps) {
    if (prevProps.loadingParam !== this.props.loadingParam) {
      this.onUpdate();
    }
  }

  onUpdate() {
    this.setState({ loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div className="loadingContainer">
            <div className="loading">Loading</div>
          </div>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}

export default Loading;
