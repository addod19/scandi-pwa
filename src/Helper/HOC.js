import React, { useState } from 'react';

export const HOC = (Component) => {
  return function WrappedComponent(props) {
    const myHookValue = useState();

    return <Component {...props} myHookValue={myHookValue} />;
  }
};

const UpdatedComponent = OriginalComponent => {
  class NewComponent extends React.Component {
    render() {
      return <OriginalComponent name="Daniel" />;
    }
  }

  return NewComponent;
}

export default UpdatedComponent;