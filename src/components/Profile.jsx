import "./Profile.css";

function Profile({ profile }) {
    return (
        <div className="profileData">
            <div className="upperProfile">
                <h1>{profile.name}</h1>
                <img src={profile.img} alt=""></img>
                <div className="charNum">#{profile.num}</div>
            </div>
            <div className="midProfile">
                <div>
                    <label className="profileLabel">Height</label>
                    <div className="stat">{profile.height}</div>
                </div>
                <div>
                    <label className="profileLabel">Weight</label>
                    <div className="stat">{profile.weight}</div>
                </div>
            </div>
            <div className="lowerProfile">
                <div>
                    <label className="profileLabel">Type</label>
                    <ul>
                        {profile.type.map((item, idx) => <li className="stat" key={idx}>{item}</li>)}
                    </ul>
                </div>
                <div>
                    <label className="profileLabel">Weaknesses</label>
                    <ul>
                        {profile.weaknesses.map((item, idx) => <li className="stat" key={idx}>{item}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Profile;
