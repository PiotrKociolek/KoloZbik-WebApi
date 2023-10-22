'use client'
import {Button, Input} from "@nextui-org/react";


const LoginPanel = () => {


    return (
        <div className="h-screen w-full flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-opacity-75 bg-gray-800 p-6 rounded-lg text-center">
                    <div className="mx-auto max-w-xs">
                        <Input
                            type="username"
                            label="nazwa użytkownika"
                            description="podaj swoją nazwę użytkownika"
                        />
                        <Input
                            type="password"
                            label="hasło"
                            description="podaj swoje hasło"
                        />
                        <Button className="mt-4 block">Zaloguj</Button>
                        <Button className="mt-2 block">Zresetuj Hasło</Button>
                    </div>
                </div>
            </div>
        </div>


    );
};
export default LoginPanel