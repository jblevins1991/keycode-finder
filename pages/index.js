import { useRef, useState } from 'react'

export default function Home() {
  const [keyCodeInfo, setKeyCodeInfo] = useState({});

  const keyRef = useRef();
  const codeRef = useRef();
  const whichRef = useRef();

  const handleKeyDown = (event) => {
    setKeyCodeInfo({
      key: event.key,
      which: event.which,
      code: event.code,
    });
  };

  const handleCopyKeyClick = (event) => {
    navigator.clipboard.writeText(keyRef.current.innerText);
  };

  const handleCopyWhichClick = () => {
    navigator.clipboard.writeText(keyRef.current.innerText);
  };

  const handleCopyCodeClick = () => {
    navigator.clipboard.writeText(keyRef.current.innerText);
  };

  return (
    <main
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <h1>Welcome to Keycode Finder.</h1>

      <p>
        This is a tool that helps developers find keycodes. To use it just press tab once to focus the main element and then press keys down. The keycode will show up below.
      </p>

      <div>
        <span
          onClick={handleCopyKeyClick}
          ref={keyRef}
        >
          <b>Key</b>: { keyCodeInfo.key || "" }
        </span>
        
        <span
          onClick={handleCopyWhichClick}
          ref={whichRef}
        >
          <b>Which</b>: { keyCodeInfo.which || "" }
        </span>

        <span
          onClick={handleCopyCodeClick}
          ref={codeRef}
        >
          <b>Code</b>: { keyCodeInfo.code || "" }
        </span>
      </div>
    </main>
  )
}
