export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🔍</em>
      </p>
    );

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `🧳 All done! Ready to go, you just get everything you need!!`
          : `You have ${numItems} items in your list
              and you already packed ${numPackedItems} whitch is ${
              percentage || 0
            }%.`}
      </em>
    </footer>
  );
}
