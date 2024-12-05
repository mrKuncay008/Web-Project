import '../css/app.css';
import { createRoot } from 'react-dom/client';
import {NextUIProvider} from '@nextui-org/react'
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel'

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render (
                <NextUIProvider>
                    <main  className="dark text-foreground bg-background">
                        <App {...props} />
                    </main>
                </NextUIProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
