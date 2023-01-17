import { Form, Checkbox, Button, Input } from "antd";
import React from "react";
import Colors from "../themes/color";

export default function Login() {
  return (
    <div
      className={
        "w-full h-[calc(100vh_-_4rem)] flex bg-white justify-center items-center font-semibold "
      }
    >
      <div
        className={
          "bg-white drop-shadow shadow-lg rounded-lg flex flex-col items-center w-[90%] md:w-[40%] h-auto md:h-auto py-5"
        }
      >
        {/* <Image preview={false} src={'/assets/logo/horizontal.png'} alt={"SaranaInvest.id logo"} className={"w-40 my-8"} /> */}
        <span className={"text-2xl "}>Masuk</span>
        <div className={"w-[80%]"}>
          <Form layout="vertical" onFinish={""} requiredMark={false}>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Mohon isi alamat email anda",
                },
              ]}
            >
              <Input placeholder="Masukan e-mail" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Kata Sandi"
              rules={[{ required: true, message: "Mohon isi password anda" }]}
            >
              <Input.Password placeholder="Masukan kata sandi" />
            </Form.Item>

            <div className={"flex justify-between mb-5"}>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a
                className={`text-xs font-normal cursor-pointer text-[${""}]`}
                href={"/forgot-password/request"}
              >
                Lupa kata sandi?
              </a>
            </div>
            <Form.Item>
              <Button
                type="primary"
                size={"large"}
                className={`bg-blue-600 text-white w-full`}
              >
                <span className={"font-bold"}>Masuk</span>
              </Button>
            </Form.Item>
          </Form>
        </div>
        <span className={""}>
          Belum punya akun?{" "}
          <a className={`text-blue-600`} href={"/register"}>
            Daftar
          </a>
        </span>
      </div>
    </div>
  );
}
