import { useState, useEffect } from 'react'
import CoinCard from '../components/CoinCard'
import LimitSelector from '../components/LimitSelector'
import FilterInput from '../components/FilterInput'


const API_URL = import.meta.env.VITE_API_URL;

function HomePage() {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [limit, setLimit] = useState(10)
    const [searchTerm, setSearchTerm] = useState('') 

    useEffect(() => {
        const fetchCoins = async () => {
            setLoading(true)
            try {
                const res = await fetch(`${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`)
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await res.json()
                setCoins(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchCoins()
    }, [limit])

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <>
            <h1>🚀 Crypto Dash</h1>
            {loading && <p>Loading...</p>}
            {error && <div className='error'>{error}</div>}

            <div className='top-controls'>
                <FilterInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <LimitSelector limit={limit} setLimit={setLimit} />
            </div>

            {!loading && !error && (
                <main className='grid'>
                    {filteredCoins.map(coin => (
                        <CoinCard key={coin.id} coin={coin} />
                    ))}
                </main>
            )}
        </>
    )
}

export default HomePage
