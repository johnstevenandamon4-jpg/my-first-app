export const metadata = { title: "Projects | John Steven" };

const projects = [
  { id: 1, name: "1st Project: Task Manager", description: "A simple task management app." },
  { id: 2, name: "2nd Project: Portfolio Website", description: "A personal portfolio website." },
  { id: 3, name: "3rd Project: Blog Platform", description: "A simple blog platform." },
];

export default function ProjectsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Projects</h1>
      {projects.map((project) => (
        <div key={project.id} className="mt-4">
          <h2 className="text-xl font-semibold">{project.name}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </main>
  );
}