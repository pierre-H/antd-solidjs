import { Component } from "solid-js";
import { Link, Route, useRouter } from "solid-app-router";

const App: Component = () => {
    const [router] = useRouter();

    return (
        <>
            <nav class="bg-gray-200 text-gray-900 px-4">
                <ul class="flex items-center">
                    <li class="py-2 px-4">
                        <Link href="/" class="no-underline hover:underline">
                            Home
                        </Link>
                    </li>
                    <li class="py-2 px-4">
                        <Link
                            href="/buttons"
                            class="no-underline hover:underline"
                        >
                            Button
                        </Link>
                    </li>
                    <li class="py-2 px-4">
                        <Link
                            href="/icons"
                            class="no-underline hover:underline"
                        >
                            Icons
                        </Link>
                    </li>
                </ul>
            </nav>

            <main class="container mx-auto mt-4">
                <Route />
            </main>
        </>
    );
};

export default App;
