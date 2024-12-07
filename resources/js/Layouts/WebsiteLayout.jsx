import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';

export default function WebsiteLayout({ children }) {
    return (
        <>
            <Head>
                <title>Website</title>
            </Head>
            <div className="min-h-screen flex flex-col relative">
                <div
                    className="absolute inset-0 bg-cover bg-center z-[-1]"
                    style={{
                        backgroundImage: 'url(/images/cds.jpg)',
                        backgroundAttachment: 'fixed',
                    }}
                >
                    {/* <Footer/> */}
                    <div className="absolute inset-0 bg-black bg-opacity-0"></div>
                </div>
                <main className="flex-grow relative z-10">
                    <div className="p-8 text-white max-w-8xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </>
    );
}
