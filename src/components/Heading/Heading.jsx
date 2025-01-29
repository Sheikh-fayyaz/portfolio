import './Heading.css'

export default function Heading({smallText, bigText1, bigText2}) {
  return (
    <>
    <span className='mb-md-3 mb-2 d-block fs-3'>{smallText}</span>
    <h1 className='grad-text'><span className="hero-title">{bigText1}</span> <br/><span className='hero-title text-md-nowrap'>{bigText2}</span></h1>
    </>
  )
}
