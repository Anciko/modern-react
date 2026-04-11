
export default function Button({rating, className, onClick}) {
    return (
        <button className={className}
            onClick={onClick}
            disabled={rating === 0}>Submit</button>
    )
}
