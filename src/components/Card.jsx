import { useState, useEffect } from "react";
import Loader from "./Loader";

export default function Card(){
    const cards = Array.from({length:8}, (_, i) => i+1);
    const imgUrls=[
        'https://picsum.photos/id/1011/300/200',
        'https://picsum.photos/id/1015/300/200',
        'https://picsum.photos/id/1021/300/200',
        'https://picsum.photos/id/1025/300/200',
        'https://picsum.photos/id/1031/300/200',
        'https://picsum.photos/id/1035/300/200',
        'https://picsum.photos/id/1041/300/200',
        'https://picsum.photos/id/1045/300/200',
    ]
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const timer=setTimeout(()=>{setIsLoading(false)},2000);
        return ()=>clearTimeout(timer);
    })

    if(isLoading){
        return <Loader />;
    }

    return(
        
        <div className="container-fluid px-3 mt-3">
            <div className="row g-3">
                {cards.map((card, index) => (
                    <div key={card} className="col-12 col-sm-6 col-lg-3 mb-3">
                        <div className="card h-100 shadow-sm custom_card">
                            <img src={imgUrls[index]} alt={`Image ${card}`} className="card-img-top img-fluid"/>
                            <div className="card-body">
                                <h5 className="card-title">Card {card}</h5>
                                <p className="card-text">This is card {card}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 