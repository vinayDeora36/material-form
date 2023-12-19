// Component2

import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const Component2 = forwardRef((props, ref) => {
  const input3Ref = useRef();
  const input4Ref = useRef();

  useImperativeHandle(ref, () => ({
    getValues: () => {
      return {
        field3: input3Ref.current.value,
        field4: input4Ref.current.value,
      };
    },
  }));

  return (
    <div>
      <input type="text" ref={input3Ref} placeholder="Field 3" />
      <input type="text" ref={input4Ref} placeholder="Field 4" />
      {/* ... more input fields */}
    </div>
  );
});

export default Component2;
