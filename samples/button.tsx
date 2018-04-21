import * as React from "react";

class Button extends React.Component {
  render() {
    const classNames = ["button"];
    return <button type="button" className={classNames} />;
  }
}

class PrimaryButton extends React.Component {
  render() {
    return <Button type="button" className="primary-button" />;
  }
}
