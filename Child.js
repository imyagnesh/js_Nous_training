import React, { PureComponent } from 'react';

var controller = new AbortController();
var signal = controller.signal;

class Child extends PureComponent {
  state = {
    counter: 0,
  };

  componentDidMount() {
    document.addEventListener('mousemove', this.mouseMove);
    this.interval = setInterval(() => {
      console.log('counter');
    }, 1000);
    const res = fetch('https://jsonplaceholder.typicode.com/todos', { signal });
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.mouseMove);
    clearInterval(this.interval);
    controller.abort();
  }

  mouseMove = () => {
    console.log('mousemoved');
  };

  throwError = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };

  render() {
    const { counter } = this.state;
    const { user } = this.props;
    if (counter > 2) {
      throw new Error('counter reached to 2...');
    }

    return (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          magni dolorum, perferendis saepe quo totam quod corporis hic.
          Reiciendis dolorem voluptatem alias modi dolores. Illum a nesciunt vel
          vero consequuntur.
        </p>
        <div>{user.name}</div>
        <button type="button" onClick={this.throwError}>
          Throw
        </button>
      </>
    );
  }
}

export default Child;
