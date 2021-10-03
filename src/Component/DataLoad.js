import { useEffect, useState } from "react"

const LoadData = () => {
    const [course, setCourse] = useState([])
    useEffect(() => {
        fetch("./Data.JSON")
            .then(res => res.json())
        .then(data=>setCourse(data))
    }, [])
    return [course]
}
export default LoadData;