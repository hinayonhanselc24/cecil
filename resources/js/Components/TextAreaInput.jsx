import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <textarea
            {...props}
            type={type}
            className={
                'border-green-200 dark:border-green-200 dark:bg-green-200 dark:text-black focus:border-green-300 dark:focus:border-green-300 focus:ring-green-300 dark:focus:ring-green-300 rounded-md shadow-sm mx-full' +
                className
            }
            ref={input}
        ></textarea>
    );
});
