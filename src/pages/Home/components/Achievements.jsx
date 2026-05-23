import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function Achievements() {
    return (
        <div className="achievements">
            <div className="achievements_wrapper">
                <div className="achievements_box">
                    <TrendingUpIcon className='achievements_trending' />
                </div>
                <div className="achievements_percent">
                    <TrendingUpIcon className='achievements_percent_trending' />
                    <h6 className="achievements_percent_text">+12.5%</h6>
                </div>
            </div>
        </div>
    )
}
