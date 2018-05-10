import * as React from "react";

@inject("foo")
class Button extends React.Component {
  render() {
    const classNames = ["button"];
    return <button type="button" className={classNames} />;
  }
}

class PrimaryButton extends React.Component {
  render() {
    let _ = /\/path\/to-a\/file\.txt\/?(.*)/;
    _ = /ab+c/;
    _ = /[.*+?^${}()|[\]\\]/g;
    _ = /(\w+)\s(\w+)/;
    _ = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
    return <Button data-ternary={`${true ? "foo" : "bar"} already exists.`} data-regexp type="button" className="primary-button" />;
  }
}
