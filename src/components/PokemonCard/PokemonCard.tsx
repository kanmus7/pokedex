import React from "react"
import { Card } from "antd"
import Meta from "antd/lib/card/Meta"
import { StarOutlined } from "@ant-design/icons"

const PokemonCard = () => {
  return (
    <Card
      style={{ textAlign: "center" }}
      title='Ditto'
      extra={<StarOutlined />}
      cover={
        <img
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
          alt='Ditto'
        />
      }
    >
      <Meta description='Fire, Magic' />
    </Card>
  )
}
export default PokemonCard
