'use client';

export const CookieNotice = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <p className="text-sm text-black flex-1">
                    I use cookies and other tracking technologies on my website to enhance your experience. By continuing to visit this site, you agree to my use of cookies.
                </p>
                <div className="flex gap-4">
                    <button className="text-sm underline text-black hover:text-gray-600 transition-colors">
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieNotice;