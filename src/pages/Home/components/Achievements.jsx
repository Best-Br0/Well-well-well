
export default function Achievements({ Icon, SmallIcon, height, text, success, box }) {
    return (
        <div className="achievements">
            <div className="achievements_wrapper">
                <div className="achievements_box">
                    <Icon className="achievements_trending" />
                </div>
                <div className={box}>
                    <SmallIcon className='achievements_percent_trending' />
                    <h6 className="achievements_percent_text">{height}</h6>
                </div>
            </div>
            <p className="achievements_text">{text}</p>
            <h3 className="achievements_success">{success}</h3>
        </div>
    )
}
