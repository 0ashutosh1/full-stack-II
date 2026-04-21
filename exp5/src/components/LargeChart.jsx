function createSeries(length) {
  const values = []
  let seed = 7

  for (let i = 0; i < length; i += 1) {
    seed = (seed * 1103515245 + 12345) % 2147483648
    values.push((seed % 100) + 1)
  }

  return values
}

function LargeChart() {
  const series = createSeries(80)

  return (
    <section className="mini-panel">
      <h4>Lazy Chart Module</h4>
      <p className="muted-text">Rendered only after user requests analytics chart.</p>
      <div className="bars-wrap">
        {series.map((value, index) => (
          <div
            key={`${index}-${value}`}
            className="bar"
            style={{ height: `${value}%` }}
            title={`Point ${index + 1}: ${value}`}
          />
        ))}
      </div>
    </section>
  )
}

export default LargeChart
