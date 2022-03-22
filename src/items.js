import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addToCart } from './store/dataSlice';
// import { database, fireStore } from './database';
// import { ref, set } from 'firebase/database';
// import { addDoc, collection, doc, query, setDoc, updateDoc } from 'firebase/firestore';

const Items = () => {

  const cartItems = [

    {
      id: 1,
      Qty: 0,
      availablity: 5,
      name: "Call Of Duty",
      price: 5000,
      category: "Shooting/Action",
      details: "Call of Duty: Black Ops Cold War is a 2020 first-person shooter video game developed by Treyarch and Raven Software and published by Activision. It was released worldwide on November 13, 2020, for Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, and Xbox Series X/S.",
      image: "https://www.khananistore.com/media/catalog/product/cache/1/small_image/300x400/9df78eab33525d08d6e5fb8d27136e95/8/1/81cybaaaqkl._ac_sl1500_.jpg",
    },

    {
      id: 2,
      Qty: 0,
      availablity: 3,
      name: "Batman Arkham Knight",
      price: 1200,
      category: "Action",
      details: "Batman: Arkham Knight is a 2015 action-adventure game developed by Rocksteady Studios and published by Warner Bros. Interactive Entertainment. Based on the DC Comics superhero Batman, it is the successor to the 2013 video game Batman: Arkham Origins, and the fourth main installment in the Batman: Arkham series.",
      image: "https://www.khananistore.com/media/catalog/product/cache/1/small_image/300x400/9df78eab33525d08d6e5fb8d27136e95/8/1/81f6bw2tcrl._ac_sl1500__1.jpg",
    },

    {
      id: 3,
      Qty: 0,
      availablity: 7,
      name: "Marvel Spiderman",
      price: 2500,
      category: "Action",
      details: "Marvel's Spider-Man: Miles Morales is a 2020 action-adventure game developed by Insomniac Games and published by Sony Interactive Entertainment. Based on the Marvel Comics character Miles Morales.",
      image: "https://www.khananistore.com/media/catalog/product/cache/1/small_image/300x400/9df78eab33525d08d6e5fb8d27136e95/8/1/81oostsvvwl._ac_sl1500_.jpg",
    },

    {
      id: 4,
      Qty: 0,
      availablity: 9,
      name: "Horizon Zero Dawn",
      price: 1800,
      category: "Action/Adventure",
      details: "Horizon Forbidden West is an action role-playing video game developed by Guerrilla Games and published by Sony Interactive Entertainment for the PlayStation 4 and PlayStation 5. A sequel to 2017's Horizon Zero Dawn, it is a single-player open world game set in a post-apocalyptic version of the western United States.",
      image: "https://www.khananistore.com/media/catalog/product/cache/1/small_image/300x400/9df78eab33525d08d6e5fb8d27136e95/8/1/81wlmsizf5l._ac_sl1500_.jpg",
    },

    {
      id: 5,
      Qty: 0,
      availablity: 2,
      name: "Resident Evil 6",
      price: 800,
      category: "Horror/Thriller",
      details: "Resident Evil 6[a] is a 2012 third-person shooter video game developed and published by Capcom. A major installment in the Resident Evil series, Resident Evil 6 was released for the PlayStation 3 and Xbox 360 in October 2012, and for Windows in March 2013. Players control Leon S. Kennedy, Chris Redfield, Jake Muller and Ada Wong as they confront the force behind a worldwide bio-terrorist attack.",
      image: "https://www.khananistore.com/media/catalog/product/cache/1/small_image/300x400/9df78eab33525d08d6e5fb8d27136e95/8/1/81jflspdccl._sl1500__1_1_1.jpg",
    },

    {
      id: 6,
      Qty: 0,
      availablity: 10,
      name: "Fifa 20",
      price: 3000,
      category: "Sports",
      details: "FIFA 20 is a football simulation video game published by Electronic Arts as part of the FIFA series.[2] It is the 27th installment in the series and was released on 27 September 2019 for Microsoft Windows, PlayStation 4, Xbox One and Nintendo Switch.[3]       Real Madrid winger Eden Hazard was named the new cover star of the Standard Edition.",
      image: "https://www.khananistore.com/media/catalog/product/cache/1/small_image/300x400/9df78eab33525d08d6e5fb8d27136e95/8/1/81lday4zpfl._ac_sl1500__4_2.jpg",
    },

    {
      id: 7,
      Qty: 0,
      availablity: 7,
      name: "AC Valhalla",
      price: 4500,
      category: "Action",
      details: "Assassin's Creed Valhalla is a 2020 action role-playing video game developed by Ubisoft Montreal and published by Ubisoft. It is the twelfth major installment in the Assassin's Creed series, and the successor to 2018's Assassin's Creed Odyssey. Principally set in the years 872–878 AD, the game recounts a fictional story during the Viking expansions into the British Isles.",
      image: "https://www.khananistore.com/media/catalog/product/cache/1/small_image/300x400/9df78eab33525d08d6e5fb8d27136e95/8/1/81qrq91ki-l._ac_sl1500_.jpg",
    },

    {
      id: 8,
      Qty: 0,
      availablity: 12,
      name: "God of War",
      price: 4000,
      category: "Action",
      details: "God of War is an action-adventure game franchise created by David Jaffe at Sony's Santa Monica Studio. It began in 2005 on the PlayStation 2 (PS2) video game console, and has become a flagship title for the PlayStation brand, consisting of ten games across multiple platforms with an eleventh currently in development.",
      image: "https://www.khananistore.com/media/catalog/product/cache/1/small_image/300x400/9df78eab33525d08d6e5fb8d27136e95/9/1/91somf876vl._sl1500__2.jpg",
    },

    {
      id: 9,
      Qty: 0,
      availablity: 1,
      name: "Nfs Heat",
      price: 1500,
      category: "Racing",
      details: "Need for Speed Heat (stylised as NFS Heat) is a 2019 racing video game developed by Ghost Games and published by Electronic Arts for Microsoft Windows, PlayStation 4 and Xbox One. It is the twenty-fourth instalment in the Need for Speed series and commemorates the series' 25th anniversary. The game received mixed reviews from critics.",
      image: "https://www.khananistore.com/media/catalog/product/cache/1/small_image/300x400/9df78eab33525d08d6e5fb8d27136e95/8/1/81tz5gfs6-l._ac_sl1500__4.jpg",
    },

    {
      id: 10,
      Qty: 0,
      availablity: 8,
      name: "Gta V",
      price: 1000,
      category: "Action/Adventure",
      details: "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall. Set within the fictional state of San Andreas, based on Southern California, the single-player.",
      image: "https://www.khananistore.com/media/catalog/product/cache/1/small_image/300x400/9df78eab33525d08d6e5fb8d27136e95/9/1/916t5h6sctl._sl1500__2_1.jpg",
    },

  ]

  const dispatch = useDispatch()
  const state = useSelector((state) => state.cart.cart)

  const addData = (item, index) => {
    dispatch(addToCart(item))
  }

  return (
    <>
      <NavLink to="/items">Cart</NavLink>
      {cartItems.map((item, index) => {
        let isAvailable = item.availablity === state.find((v) => v.id === item.id)?.Qty
        return (
          <div key={index} className="container">
            <div className="row">
              <div className="col-md-4">
                <img src={item.image} style={{ height: "350px", objectFit: "cover" }} />
                <p style={{ fontSize: "22px" }}>Rs : {item.price}</p>
                <p style={{ fontSize: "22px" }}>Name : {item.name}</p>
                <p style={{ fontSize: "22px" }}>
                  Availablity : {isAvailable ? (
                    <span style={{ fontWeight: "600" }} className='out-of-stock'>Out Of Stock</span>
                  ) : (
                    <span style={{ fontWeight: "600" }} className='in-stock'>In Stock</span>
                  )}
                </p>
                <button disabled={isAvailable} className='btn btn-success' onClick={() => addData(item, index)}>Add To Cart</button>
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Items;