"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";

import { signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Auth({ session }: any) {
  return (
    <div className="flex justify-center h-screen bg-black">
      {!session ? (
        <div className="flex">
          <div className="flex justify-center items-center">
            <div className="space-y-6 w-72">
              <div>
                <Label className="text-white">Email</Label>
                <Input />
              </div>
              <div>
                <Label className="text-white">Senha</Label>
                <Input />
              </div>
              <div className="">
                <Button className="w-full">Login</Button>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Separator className="w-2/5" />
                <p className="text-white">ou</p>
                <Separator className="w-2/5" />
              </div>
              <div className="">
                <Button
                  className="w-full flex space-x-2"
                  onClick={() => signIn("google")}
                >
                  <FcGoogle size={26} />

                  <p>Continuar com o Google</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="space-y-4">
            <Button
              className="w-full"
              variant={"secondary"}
              onClick={() => signOut()}
            >
              Deslogar
            </Button>
            <p className="text-red-500">Conta logada com sucesso</p>
            <p className="text-red-500 underline">
              Bem vindo {session.user.name}
            </p>
            <div className="flex items-center justify-center  ">
              <Image
                className="rounded-full"
                src={session?.user?.image}
                alt={"perfil"}
                width={150}
                height={150}
              />{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
