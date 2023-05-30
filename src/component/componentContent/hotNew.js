import React from "react";

export default function HotNew() {
  return (
    <div className="hot-area container">
      <div className="hot-area-left">
        <div className="content-product">
          <img src="https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/3/3-csgo-putri-anggi.jpg"></img>
          <div className="action-product"> <h3 className="blue" >Hết Hàng</h3> <h3 className="normal">$30.00</h3></div>
        </div>
      </div>
      <div className="hot-area-right">
        <div className="content-product">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXPdj6aC7rnw0PAkZHdgHwKS_y6DUtYkSjFw&usqp=CAU"></img>
          <div className="action-product">
            <h3 className="blue">Còn Hàng</h3> <h3 className="normal">$24.00</h3>
          </div>
        </div>
        <div className="content-product">
          <img src="https://images2.thanhnien.vn/zoom/600_315/Uploaded/badiep/2021_05_02/1611060869791-1_WRJM.jpg"></img>
          <div className="action-product">
            <h3 className="blue">Còn Hàng</h3> <h3 className="normal">$12.00</h3>
          </div>
        </div>
      </div>
    </div>
  )
}