const imageIds = Array.from({ length: 24 }, (_, index) => index + 1)

function ImageWall() {
  return (
    <section className="mini-panel">
      <h4>Lazy Media Grid</h4>
      <p className="muted-text">This media wall is also loaded on demand.</p>
      <div className="image-wall">
        {imageIds.map((id) => (
          <div key={id} className="image-card">
            <div className="image-placeholder">IMG {id}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ImageWall
