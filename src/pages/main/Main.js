import {useState, useEffect } from "react";
import { connect } from "react-redux";
import {onLike} from "../../actions/index";

import Container from "../../components/container/Container";
import Flat from "../../components/flat/Flat";



const Main = ({data, onLike}) => {
  const [result, setResult] = useState([]);
  const mapData = () => {
    setResult(data.map(item => {
      const {title, rooms, area, unit} = item.attributes
      const {street, city, house, room} = item.attributes.address
      const {first_name, last_name, middle_name} = item.relationships.attributes

      const onLiked = () => {
        onLike(item.id)
      }

      return (
        <li className="main__item" key={item.id}>
          <Flat 
          title={title} 
          address={`ул. ${street}, д. ${house}, кв. ${room}`}
          city={city}
          rooms={rooms}
          area={`${area} ${unit}`}
          agent={`${last_name} ${first_name} ${middle_name}`}
          onLiked={onLiked}
          liked={item.liked}
          />
        </li>
      )
    }))
  }

  useEffect(mapData ,[data]);
  return (
    <div className="main">
      <Container >
        <ul className="main__list">
          {result}
        </ul>
      </Container>
    </div>
  )
}

const mstp = ({data}) => {
  return {
    data
  }
}

const mdtp = {
  onLike
}

export default connect(mstp, mdtp)(Main);