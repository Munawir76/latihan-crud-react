import { Form, Checkbox, Button, Input } from "antd";
import React from "react";
import Colors from "../themes/color";

export default function Register() {
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
        <span className={"text-2xl "}>Daftar</span>
        <div className={"w-[80%]"}>
          <Form layout="vertical" onFinish={""} requiredMark={false}>
            <Form.Item
              name="fullname"
              label="Nama Lengkap"
              rules={[
                {
                  required: true,
                  message: "Mohon isi nama lengkap anda",
                },
              ]}
            >
              <Input placeholder="Masukan nama lengkap" />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Nomer Telephone"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Mohon isi nomer hp anda",
                },
              ]}
            >
              <Input placeholder="Masukan nomer telphone" />
            </Form.Item>
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
            <Form.Item>
              <Button
                type="primary"
                size={"large"}
                className={`bg-blue-600 text-white w-full mt-7`}
              >
                <span className={"font-bold"}>Daftar</span>
              </Button>
            </Form.Item>
          </Form>
        </div>
        <span className={""}>
          Sudah punya akun?{" "}
          <a className={`text-blue-600`} href={"/login"}>
            Masuk
          </a>
        </span>
      </div>
    </div>
  );
}
