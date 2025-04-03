import SingleEducationalBackground from "./SingleEducationalBackground";

export default function EducationalBackgrounds() {
  const educationBgs = [
    {
      bgId: "asdfg",
      institution: "Unity University",
      country: "Ethiopia",
      programLevel: "Bachelors",
      fieldOfStudy: "Computer Science",
      achievement: "Diploma",
      startDate: new Date(2018, 9, 20),
      endDate: new Date(2022, 8, 16),
    },
    {
      bgId: "asdfh",
      institution: "Fountain of Knowledge School",
      country: "Ethiopia",
      programLevel: "Secondary School",
      fieldOfStudy: "N/A",
      achievement: "Diploma",
      startDate: new Date(2013, 8, 12),
      endDate: new Date(2017, 6, 15),
    },
  ];
  return (
    <div>
      {educationBgs.map((bg) => (
        <div key={bg.bgId}>
          <SingleEducationalBackground data={bg} />
        </div>
      ))}
    </div>
  );
}
