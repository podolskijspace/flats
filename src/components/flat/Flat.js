const Flat = ({onLiked, title, city, address, agent, area, rooms, liked}) => {
  return (
    <div className={`flat${liked ? ' liked' : ''}`}>
      <p className="flat__title">
        {title}
      </p>
      <p className="flat__info">
        Площадь: {area}
      </p>
      <p className="flat__info">
        Кол-во комнат: {rooms}
      </p>
      <p className="flat__info">
        Город: {city}
      </p>
      <p className="flat__info">
        Адрес: {address}
      </p>
      <p className="flat__info">
        Агент: {agent}
      </p>
      <div onClick={onLiked} className="flat__like">
        Liked
      </div>
    </div>
  )
}

export default Flat;