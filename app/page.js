const projects = [
  {
    title: "MGNREGA ERP — Intelligent Attendance System",
    period: "Sept 2025",
    desc: "Blockchain-backed intelligent ERP system enhancing transparency and efficiency in MGNREGA attendance tracking and reporting.",
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Hyperledger Fabric"],
    link: "#"
  },
  {
    title: "FLOAT BOYS — NFT Distribution",
    period: "2025",
    desc: "NFT distribution platform enabling decentralized content ownership with Ethereum and Firebase.",
    tech: ["Next.js", "Ethereum", "Firebase"],
    link: "#"
  }
];

export default function Home() {
  return (
    <>
    hello word
    </>
  );
}

function Experience({ title, period, bullets }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <span className="text-sm text-gray-500">{period}</span>
      </div>
      <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}