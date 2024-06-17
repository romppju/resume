import { useEffect, useState } from 'react'

const useIsVisible = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting)

        //if (entry.isIntersecting) observer.unobserve(entry.target)
      },
      {
        threshold: 0,
      }
    )

    observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  }, [ref])

  return isIntersecting
}

export default useIsVisible
