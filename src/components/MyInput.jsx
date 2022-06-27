import React from "react";
import { Input } from "antd";
import { KeyOutlined, MailFilled, UserOutlined } from "@ant-design/icons";
const MyInput = () => {
  return (
    <div>
      <form style={{ width: "50%", margin: "0 auto", padding: "2rem 0" }}>
        <Input.Search placeholder="search something"></Input.Search>
        <Input
          placeholder="Name"
          // maxLength={10}
          type={"text"}
          prefix={<UserOutlined />}
          allowClear
        ></Input>
        <Input
          placeholder="Email"
          type={"email"}
          prefix={<MailFilled />}
          // disabled= {var}
          allowClear
        ></Input>
        <Input
          placeholder="password"
          type={"password"}
          prefix={<KeyOutlined />}
          allowClear
        ></Input>
        <Input type={"submit"} value="submit"></Input>
      </form>
    </div>
  );
};

export default MyInput;
