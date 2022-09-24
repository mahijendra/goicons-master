import React, {  } from "react";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";

const ReactCopyToClipboard = () => {
  /*const [value, setValue] = useState("");
  const [copy, setCopy] = useState("false");*/

  return (
    <div>
      <input
        value={this.state.value}
        onChange={({ target: { value } }) =>
          this.setState({ value, copied: false })
        }
      />

      <CopyToClipboard
        text={this.state.value}
        onCopy={() => this.setState({ copied: true })}
      >
        <span>Copy to clipboard with span</span>
      </CopyToClipboard>

      <CopyToClipboard
        text={this.state.value}
        onCopy={() => this.setState({ copied: true })}
      >
        <button>Copy to clipboard with button</button>
      </CopyToClipboard>

      {this.state.copied ? <span style={{ color: "red" }}>Copied.</span> : null}
    </div>
  );
};


export default ReactCopyToClipboard;