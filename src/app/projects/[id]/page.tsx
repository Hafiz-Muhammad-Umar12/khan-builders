//  For handling metadata (optional)
import Image from 'next/image';

// Define the ProjectPageProps type
type ProjectPageProps = {
  project: {
    id: string;
    name: string;
    description: string;
    techStack: string;
    image: string;
  };
};

const ProjectPage = ({ project }: ProjectPageProps) => {
  return (
    <div className="container mx-auto mt-24 p-6">
     <div className="container mx-auto p-6">
  <h1 className="text-5xl font-extrabold text-white mb-4 leading-tight">
    {project.name}
  </h1>
  <p className="text-lg text-white mb-6 tracking-wide">
    {project.description}
  </p>
  <p className="text-md text-blue-600 font-semibold italic">
    {project.techStack}
  </p>
</div>

      <Image
        height={500}
        width={500}
        src={project.image} // Image source path
        alt={project.name}
        className="w-full mt-4 rounded-lg"
      />
    </div>
  );
};

// This function fetches dynamic data for the project
export async function generateStaticParams() {
  const projects = [
    { id: 'building1' },
    { id: 'building2' },
    { id: 'building3' },
    { id: 'building4' },
    { id: 'building5' },
    { id: 'building6' },
  ];

  return projects.map((project) => ({
    id: project.id,
  }));
}

// This is the new approach to fetch data for the project page
export async function fetchProjectData(id: string) {
  // Static project data based on the dynamic `id`
  const project = {
    id,
    name: `The Project is ownd by Khan's Builders `,
    description: `A large-scale commercial building project with state-of-the-art designs and sustainable materials.A large-scale commercial building project with state-of-the-art designs and sustainable materials`,
    techStack: `Technologies used for this project is Khan's Builders`,
    image: `/images/${id}.avif`, // Correct image path
  };

  return project;
}

// This is the component where you fetch the project data dynamically
export default async function ProjectPageDynamic({ params }: { params: { id: string } }) {
  // Await the params before destructuring
  const { id } = await params;

  const project = await fetchProjectData(id);

  return <ProjectPage project={project} />;
}
