import React, { forwardRef } from "react";
import { PROFILE_DATA } from "./componentContent/api"

const Profile = forwardRef(function Profile({ setToggle }, ref) {
    const { name, dob, id, email, avatar, description, gallery } = PROFILE_DATA
    return (
        <div className="profile-card" ref={ref}>
            <div className="profile-dt">
                <i className="fas fa-xmark" onClick={setToggle}></i>
                <div className="profile-header">
                    <img className="profile-avatar" src={avatar} alt={name} />
                    <div className="profile-info">
                        <h2>{name}</h2>
                        <p className="profile-id">ID: {id}</p>
                    </div>
                </div>
                <div className="profile-content">
                    <p><b>Ngày sinh:</b> {dob}</p>
                    <p><b>Email:</b> {email}</p>
                    <p className="profile-desc"> Bio : {description}</p>
                </div>
                <div className="profile-gallery">
                    {gallery.map((img, idx) => (
                        <img key={idx} className="profile-gallery-img" src={img} alt={`gallery-${idx}`} />
                    ))}
                </div>
                <div className="profile-footer">
                    <button className="btn-edit">Chỉnh sửa</button>
                </div>
            </div>
        </div>
    );
});

export default Profile;