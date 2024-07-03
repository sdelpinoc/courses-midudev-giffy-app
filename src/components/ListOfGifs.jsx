import Gifs from './Gifs';

const ListOfGifs = ({ gifs, keyword }) => {
  return (
    <>
      {
        (keyword && <p className="subtitle">{keyword}</p>)
      }
      <div className='list-of-gifs'>
        {
          gifs.map(singleGif => (
            <Gifs key={singleGif.id} {...singleGif} /> // {...singleGif}, this generates a new object every time, that is, the Gifs component memo will always be rendered
          ))
        }
      </div>
    </>
  )
}

export default ListOfGifs;