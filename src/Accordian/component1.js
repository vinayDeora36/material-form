// Component1

import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Component1 = forwardRef((props, ref) => {
  const location_title = useRef();
  const input2Ref = useRef();
  const name1 = useRef();
  const name2 = useRef();
  const name3 = useRef();
  const name4 = useRef();

  useImperativeHandle(ref, () => ({
    getValues: () => {
      return {
        location_title: location_title.current.value,
        field2: input2Ref.current.value,
        name1: name1.current.value,
        name2: name2.current.value,
        name3: name3.current.value,
        name4: name4.current.value,
      };
    },
  }));

  return (
    <div>
      <input type="text" ref={location_title} placeholder="Field 1" />
      <input type="text" ref={input2Ref} placeholder="Field 2" />
      <input type="text" ref={name1} placeholder="Field 3" />
      <input type="text" ref={name2} placeholder="Field 4" />
      <input type="text" ref={name3} placeholder="Field 5" />
      <input type="text" ref={name4} placeholder="Field 6" />
      {/* ... more input fields */}
    </div>
  );
});

export default Component1;
