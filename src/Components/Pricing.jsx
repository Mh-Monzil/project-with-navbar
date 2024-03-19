import SinglePrice from "./SinglePrice";


const Pricing = () => {

    const cardData = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "currency": "USD",
            "features": [
                "Unlimited gym access",
                "Cardio and weights access",
                "Free fitness consultation"
            ],
            "contractLength": "Month-to-month",
            "signUpFee": 50
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": 59.99,
            "currency": "USD",
            "features": [
                "24/7 gym access",
                "Priority equipment access",
                "All group classes included",
                "Monthly personal training",
            ],
            "contractLength": "12 months",
            "signUpFee": 100
        },
        {
            "id": 3,
            "name": "Family Plan",
            "price": 99.99,
            "currency": "USD",
            "features": [
                "Access for 4 members",
                "Shared group class passes",
                "Family fitness events",
                "Free family consultation"
            ],
            "contractLength": "12 months",
            "signUpFee": 75
        }
    ]

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold pb-4">Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    cardData.map(card => <SinglePrice key={card.id} card={card}></SinglePrice>)
                }
            </div>
        </div>
    );
};

export default Pricing;