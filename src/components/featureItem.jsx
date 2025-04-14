function FeatureItem ({icon,type,title,text}) {
    return (
        <div className="features-item">
            <img 
                src={icon} 
                alt={type + " icon"}
                className="features-item-icon" 
            />
            <h3 className="features-item-title">{title}</h3>
            <p>
                {text}
            </p>
        </div>
    )
}

export default FeatureItem