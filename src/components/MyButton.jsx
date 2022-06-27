import React, { useState } from "react";
import { Button } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
const MyButton = () => {
  const [loading, setLoading] = useState(false);
  const onButtonClick = (e) => {
    console.log(`Button clicked`);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div>
      <Button
        type="primary"
        block
        loading={loading}
        onClick={onButtonClick}
        icon={<PoweroffOutlined />}
        style={{ backgroundColor: "orange", color: "black" }}
      >
        primary btn
      </Button>
      <Button type="ghost" shape="round">
        ghost btn
      </Button>
      <Button type="dashed">Dashed btn</Button>
      <Button type="default">default btn</Button>
      <Button type="link" href="https://www.google.com">
        link btn
      </Button>
    </div>
  );
};

export default MyButton;
