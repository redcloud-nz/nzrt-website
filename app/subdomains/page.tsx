

export default function SubdomainsPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12">
            <div className="max-w-2xl w-full flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-4 text-center text-gray-900">
                    NZRT Subdomains
                </h1>
                <p className="font-mono text-sm/6 text-gray-700 mb-6 text-center">
                    Subdomains of this site (eg. christchurch.nzrt.org.nz) are available to accredited New Zealand Response Teams (NZRTs) to use for their own purposes.
                    
                </p >
                <p className="font-mono text-sm/6 text-gray-700 mb-6 text-center">
                    Contact Alex Westphal for more information.
                </p>
            </div>
        </main>
    );
}