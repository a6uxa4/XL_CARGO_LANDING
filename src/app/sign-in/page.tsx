'use client';

import { useState } from 'react';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email !== 'admin@example.com' || password !== 'password') {
            setError('Неправильный логин или пароль!');
        } else {
            setError('');
            alert('Успешный вход!');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="">
                <h2 className="text-[40px] font-bold text-center text-green-900 leading-none">ВХОД В ЛИЧНЫЙ КАБИНЕТ</h2>
                <p className="text-center text-[18px] text-green-900">Все поля заполнения обязательны*</p>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="E-Mail Или Ваш Код"
                            className="w-full p-3 border-[2px] border-black rounded-xl "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Пароль"
                            className="w-full border-[2px] border-black rounded-xl p-3 "
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <input type="checkbox" id="remember" className="mr-2" />
                        <label htmlFor="remember" className="text-sm text-gray-600">
                            Запомнить Меня На Этом Устройстве
                        </label>
                    </div>
                    {error && <p className="text-red-600 text-center text-[20px]">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-green-900 text-white h-[50px] hover:bg-green-800 transition  rounded-xl"
                    >
                        ВОЙТИ
                    </button>
                </form>
            </div>
        </div>
    );
}
