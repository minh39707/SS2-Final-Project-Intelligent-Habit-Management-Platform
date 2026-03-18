export default function ItemCard({ item }) {
  return (
    <article className="item-card">
      <div className="item-card-top">
        <div className="item-card-icon">{item.icon}</div>
        <div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      </div>

      <div className="item-card-footer">
        <span className="item-card-price">{item.price}</span>
        <button type="button" disabled>
          Locked
        </button>
      </div>
    </article>
  );
}
