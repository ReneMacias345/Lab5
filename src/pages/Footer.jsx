import React from 'react';


export const Footer = () => {
    return (
        <footer className="bg-light text-center py-3 mt-4">
            <div className="container">
                <p className="mb-0">
                    &copy; {new Date().getFullYear()} <strong>René Macías</strong>. A00836714.
                </p>
            </div>
        </footer>
    );
};