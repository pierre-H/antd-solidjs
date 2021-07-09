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
                            href="/about"
                            class="no-underline hover:underline"
                        >
                            About
                        </Link>
                    </li>
                    <li class="py-2 px-4">
                        <Link
                            href="/error"
                            class="no-underline hover:underline"
                        >
                            Error
                        </Link>
                    </li>

                    <li class="text-sm flex items-center space-x-1 ml-auto">
                        <span>URL:</span>
                        <input
                            class="w-75px p-1 bg-white text-sm rounded-lg"
                            type="text"
                            readOnly
                            value={router.location}
                        />
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
