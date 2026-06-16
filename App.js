import ProfileCard from "./ProfileCard";
import './App.css';


function App() {
  const profiles = [
    {
      image: "image file avatar/avatarme.jpg",
      name: "Tatjana Panackova",
      jobTitle: "Pharmacist / Wellness Advisor / Business Owner",
      bio: "I hold a Masters degree in Pharmacy and work in the UK wellness sector...",
      skills: ["Pharmacy", "Holistic Healing", "Crystal Work", "Herbal Remedies"]
    }
  ];

  return (
    <div>
      {profiles.map((p, i) => (
        <ProfileCard
          key={i}
          image={p.image}
          name={p.name}
          jobTitle={p.jobTitle}
          bio={p.bio}
          skills={p.skills}
        />
      ))}
    </div>
  );
}

export default App;
