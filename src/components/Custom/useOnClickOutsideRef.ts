import { useEffect, useRef } from 'react'

export default function useOnClickOutsideRef(callback: any, initialValue = null) {
    const elementRef = useRef(initialValue)
    useEffect(() => {
        function handler(event: { target: any }) {
            // @ts-ignore
            if (!elementRef.current?.contains(event.target)) {
                callback()
                // console.log('entered callback ................')
            }
        }
        window.addEventListener('click', handler)
        return () => window.removeEventListener('click', handler)
    }, [callback])
    return elementRef
}