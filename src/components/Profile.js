import profilePic from "../assets/images/puppy.jpg";

function Profile() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={profilePic} className="card-img-top" alt="foto de perfil" />
      <div className="card-body">
        <h5 className="card-title">Cute Puppy</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in est
          vel erat commodo bibendum vel quis lacus. Donec facilisis iaculis nibh
          et lacinia. Cras sed dui nec nisi blandit porta.
        </p>
      </div>
    </div>
  );
}

export default Profile;
