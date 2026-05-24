import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Statistics() {

    const data = [
        { name: 'Пн', pv: 32000, uv: 45000 },
        { name: 'Вт', pv: 38000, uv: 52000 },
        { name: 'Ср', pv: 45000, uv: 48000 },
        { name: 'Чт', pv: 42000, uv: 61000 },
        { name: 'Пт', pv: 58000, uv: 55000 },
        { name: 'Сб', pv: 72000, uv: 67000 },
        { name: 'Вс', pv: 31000, uv: 42000 },
    ];
    return (
        <div className="statistics">
            <div className="statistics_wrapper">
                <div className="statistics_info">
                    <h2 className="statistics_title">Выручка по неделям</h2>
                    <p className="statistics_text">Сравнение аренды и производства</p>
                </div>
                <div className="statistics_termin">
                    <div className="statistics_termin_box">
                        <div className="statistics_termin_circle"></div>
                        <h5 className="statistics_termin_text">Аренда</h5>
                    </div>
                    <div className="statistics_termin_box">
                        <div className="statistics_termin_circle2"></div>
                        <h5 className="statistics_termin_text">Производство</h5>
                    </div>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={350} >
                <LineChart data={data}>
                  
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" tick={{ fontFamily: 'Manrope', fontSize: 12, fontWeight: 400, fill: '#565D6D' }} tickLine={false} axisLine={false} dy={10} />
                    <YAxis tick={{ fontFamily: 'Manrope', fontSize: 12, fontWeight: 400, fill: '#565D6D' }} tickLine={false} axisLine={false} dx={-10} />
                    <Tooltip />

                    <Line type="monotone" dataKey="uv" stroke="#10b981" strokeWidth={3} activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="pv" stroke="#3b82f6" strokeWidth={3} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
