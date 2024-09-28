import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardComponent from '../components/CardComponent';

interface User {
    id: number;
    name: string;
    email: string;
}

export default function Home() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
    const [users, setUsers] = useState<User[]>([]);
    const [newUser, setNewUser] = useState({name: '',email:''});

    // fetch users
    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await axios.get(`${apiUrl}/users`);;
                setUsers(response.data.reverse());
            } catch(error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, []);

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <div className="space-y-4 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-800 text-center">User Management App</h1>
        </div>
        </main>
    );
}

