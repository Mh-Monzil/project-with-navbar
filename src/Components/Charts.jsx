import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';


const Charts = () => {

    const caloryBurn = [
        {"name":"Person A","age":25,"calories":2700},
        {"name":"Person B","age":35,"calories":2000},
        {"name":"Person C","age":45,"calories":2600},
        {"name":"Person D","age":55,"calories":1900},
        {"name":"Person E","age":65,"calories":2400},
        {"name":"Person F","age":15,"calories":2500}

    ]

    return (
        <div className='mt-10'>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart width={600} height={300} data={caloryBurn}>
                    <XAxis dataKey="age" />
                    <YAxis dataKey="calories" />
                    <Bar dataKey="calories" barSize={100} fill="#FF5861"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Charts;