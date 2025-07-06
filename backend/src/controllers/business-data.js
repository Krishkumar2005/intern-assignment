import businessData from '../../data/businessData.js'



export const getBusinessData = (req, res) => {
    try {
        const data = req.body;

        console.log("data : ", data)

        const { business_name, location } = data
        if (!business_name) {
            return res.status(400).json({
                message: "provide a valid business name"
            })
        }

        if (!location) {
            return res.status(400).json({
                message: "provide the correct business location"
            })
        }

        let response = {};
        for (let i = 0; i < businessData.dummyData.length; i++) {
            if (businessData.dummyData[i].name.toLowerCase() === business_name.toLowerCase()) {
                console.log("inside if")
                response = {
                    name: businessData.dummyData[i].name,
                    location: businessData.dummyData[i].location,
                    rating: businessData.dummyData[i].rating,
                    reviews: businessData.dummyData[i].reviews,
                    headline: businessData.dummyData[i].headlines[0]
                };

                break;
            }
        }

        console.log("Response ", response, Object.keys(response).length === 0)

        if (Object.keys(response).length === 0) {
            response = {
                name:business_name,
                location: location,
                rating: 4.3,
                reviews: 127,
                headline: "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
            }
        }

        console.log("response : ", response)

        return res.status(200).json({
            success: true,
            response,
        })

    } catch (error) {
        console.log("business-data-controller error ", error)
        return res.status(500).json({
            success: false,
            error: `Not exist any business with your information ${error.message}`
        })
        
    }
}

