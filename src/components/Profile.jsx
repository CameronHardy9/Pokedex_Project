import "./Profile.css";

function Profile({ profile }) {
    return (
        <div className="profileData">
            <div className="upperProfile">
                <h1>{profile.name}</h1>
                <img src={profile.img}></img>
                <div>#{profile.num}</div>
                <div ><strong>{profile.name}</strong></div>
            </div>
            <div className="midProfile">
                <label><strong>Height</strong></label>
                <div>{profile.height}</div>
                <label><strong>Weight</strong></label>
                <div>{profile.weight}</div>
            </div>
            <div className="lowerProfile">
                <label><strong>Type</strong></label>
                <ul>
                    {profile.type.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
                <label><strong>Weaknesses</strong></label>
                <ul>
                    {profile.weaknesses.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default Profile;
