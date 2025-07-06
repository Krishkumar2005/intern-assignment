import businessData from '../../data/businessData.js'


export const getdifferentHeadline = (req, res) => {
    try {
        const {business_name, location} = req.query
        console.log("req query data",req.query)

        if (!business_name) {
            return res.status(400).json({
                message: "search with a valid business name"
            })
        }

        if (!location) {
            return res.status(400).json({
                message: "search with correct business location"
            })
        }

        let headline;
        for(let i=0; i<businessData.dummyData.length; i++){
            if(businessData.dummyData[i].name.toLowerCase() === business_name.toLowerCase()){
                const randomIndex = Math.floor(Math.random()*businessData.dummyData[i].headlines.length)
                headline = businessData.dummyData[i].headlines[randomIndex]
                break;
            }
        }

        console.log("headline : ", headline)

        return res.status(200).json({
            success: true,
            newHeadline: headline
        })

        
    } catch (error) {
        console.log("Error in generating new headline", error)
        return res.status(500).json({
            success:false,
            error: error.message
        })
        
    }
}