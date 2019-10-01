import React from 'react';
import Flexi from '../../UI_Components/Flexi';
import hoc from '../../UI_HOCs/ScreenHocs'
class ScreenInterfaces extends React.Component {
  render() {
    return (
      <div>
        <Flexi
          config={this.props.config}
          handleChange={this.props.handleChange}
          onFlexiSubmit={this.props.onFlexiSubmit}
        />
      </div>
    );
  }
}

export default hoc()(ScreenInterfaces);
