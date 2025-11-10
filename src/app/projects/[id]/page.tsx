import { Metadata } from 'next';
import { projectsData } from '@/data/projectsData';
import ProjectDetailClient from '@/components/ProjectDetailClient';
import { notFound } from 'next/navigation';

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projectsData.find(p => p.id === params.id);
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The project you are looking for does not exist.'
    };
  }

  const title = `${project.title} | Portfolio`;
  const description = project.description;
  const url = `https://serviwo.com/projects/${params.id}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [
        {
          url: `https://serviwo.com${project.image}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`https://serviwo.com${project.image}`],
    },
    alternates: {
      canonical: url,
    },
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetail({ params }: Props) {
  const project = projectsData.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
