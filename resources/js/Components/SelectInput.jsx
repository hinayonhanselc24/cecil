// import { forwardRef, useEffect, useRef } from 'react';
import { forwardRef, useRef } from 'react'; //remove useEffect because we don't use it 

// export default forwardRef(function SelectInput({ type = 'text', className = '', isFocused = false, children, ...props }, ref) {
export default forwardRef(function SelectInput({className = '', isFocused = false, children, ...props }, ref) { // remove the type = "text" and add the children
    const input = ref ? ref : useRef();

    // useEffect(() => {
    //     if (isFocused) {
    //         input.current.focus();
    //     }
    // }, []);

    return (
        <select
            {...props}
            // type={type}
            className={
                'border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm ' +
                className
            }
            ref={input}
        >
            {children}
        </select>
    );
});
