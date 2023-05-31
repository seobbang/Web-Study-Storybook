import React from "react";
import Input from "./Input";

export default {
  title: "components/Form/Input",
  component: Input,
};

// 기본 포맷
const Template = (args) => <Input {...args} />;

// bind로 제어
// 이 아래 각각이 새로운 스토리들인 것!
export const Password = Template.bind({});
Password.args = {
  id: "password",
  label: "패스워드",
  type: "password",
  value: "1234",
  placeholder: "패스워드를 입력하세요.",
};
Password.storyName = "Password";

export const UserIdError = Template.bind({});
UserIdError.args = {
  id: "userid",
  label: "아이디",
  value: "user@email.",
  placeholder: "아이디로 사용할 이메일을 입력하세요.",
  error: "아이디(이메일)는 이메일 형식으로 입력해주세요.",
};
UserIdError.storyName = "Password(Error)";

export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
};
