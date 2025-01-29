export default function Image({imgPath, imgAlt, imgLoading}) {
  return (
    <img src={imgPath} className="w-100 rounded-4" alt={imgAlt} loading={imgLoading} />
  )
}
