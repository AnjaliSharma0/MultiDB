"use client";

import { useQuery } from "@tanstack/react-query";

export default function Users() {

    const fetchUsers = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        return response.json();
    };

    const {
        data,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
    });

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (error instanceof Error) {
        return <h1>{error.message}</h1>;
    }

    return (
        <div>
            <h1>Users</h1>

            {data.map((user: any) => (
                <p key={user.id}>
                    {user.name}
                </p>
            ))}
        </div>
    );
}