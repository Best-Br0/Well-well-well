import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export default function Top() {
    const data = [
        { name: 'Blackout Elite', value: 95 },
        { name: 'Velvet Dream', value: 80 },
        { name: 'Linen Breeze', value: 72 },
        { name: 'Silk Road', value: 63 },
        { name: 'Coastal Mist', value: 58 },
    ];
    return (
        <div className='top'>
            <h3 className="top_five">ТОП-5 моделей штор</h3>
            <p className="top_sales">По объему продаж за месяц</p>
            <div style={{ width: '100%', height: 350 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} layout="vertical" margin={{  }}>
                        <XAxis type="number" hide />

                        <YAxis
                            dataKey="name"
                            type="category"
                            tick={{ fontFamily: 'Manrope', fontSize: 14, fontWeight: 400, fill: '#565D6D' }}
                            tickLine={false}
                            axisLine={false}
                            width={100}
                        />

                        <Bar
                            dataKey="value"
                            fill="#26C2A3"
                            radius={[0, 8, 8, 0]}
                            barSize={42}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
