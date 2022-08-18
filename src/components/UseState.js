import React, { useState } from 'react';

export default function Example() {
  // Khai báo 1 biến số đếm, gọi là "count"
  const [count, setCount] = useState(0); // mặc định giá trị cho nó oko

  return (
    <div>
      <p>Bạn đã bấm {count} lần</p>
      <button onClick={() => setCount(count + 1)}>
        Bấm vào tôi
      </button>
    </div>
  );
} 