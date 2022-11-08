import { useEffect } from 'react'
const UseTitle = title => {
    useEffect(() => {
        document.title = `${title}-Electronic Security System Installer`
    }, [title])
}


export default UseTitle;