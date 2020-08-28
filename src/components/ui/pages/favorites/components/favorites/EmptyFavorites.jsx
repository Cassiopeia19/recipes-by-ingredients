import React from "react";
import {Link} from 'react-router-dom'

export default function EmptyFavorites() {
  return <section>
    <h2>empty favorites...</h2>
    <Link to="/favorites">
      fill it
    </Link>
  </section>
}
