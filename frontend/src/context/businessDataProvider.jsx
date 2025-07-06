import React, {useState} from 'react'
import { BusinessDataContext } from './businessData'


function BusinessDataProvider({ children }) {
    const [businessData, setBusinessData] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    return (
        <BusinessDataContext value={{ businessData, setBusinessData, isLoading, setIsLoading }}>
            {children}
        </BusinessDataContext>
    )
}

export default BusinessDataProvider